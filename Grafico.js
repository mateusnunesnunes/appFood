import React, { Component } from 'react';
import {StyleSheet, View, Text , Dimensions} from 'react-native';

import { ProgressChart } from 'react-native-chart-kit';
import SessaoSingleton from './SessaoSingleton';

export default class Grafico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carbTotalConsumido: 0,
      protTotalConsumido: 0,
      gordTotalConsumido: 0,
      carbTotalSemana: 0,
      protTotalSemana: 0,
      gordTotalSemana: 0,
      pesoUser: 0,
      objetivoUser: 0,
      data: {
        data: []
      }
    };
  }

  loadFoods = ()  => {
    let numRefeicoesNoDia = 0;
    let objetivo = "";
    console.log(this.state.data);
    if(this.state.pesoUser == this.state.objetivoUser){ // manter peso
      numRefeicoesNoDia = 5
      objetivo = "manter";
    }else if(this.state.pesoUser < this.state.objetivoUser){ // ganhar peso
      numRefeicoesNoDia = 5
      objetivo = "ganhar";
    }else{ // perder peso
      numRefeicoesNoDia = 4
      objetivo = "perder";
    }
    var result = fetch('http://192.168.15.9:4548/listaComidas', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => 
      response.json().then(data => ({
        data: data,
        status: response.status
    }))
    ).then(response => {
      let array = response.data.comidas;
      let numComidas = array.length;
      let carbTot = 0;
      let protTot = 0;
      let gordTot = 0;
      let carbTotSemana = 0;
      let protTotSemana = 0;
      let gordTotSemana = 0;
      let contadorComidasDia = 0;

      let date = new Date();
      let diaSemana = date.getDay();
      if(diaSemana > 5)
        diaSemana = 5
      let limiteComidasDiasCorridos = numRefeicoesNoDia * diaSemana;
      let limiteComidasSemanaToda = numRefeicoesNoDia * 5;
      console.log(carbTot, protTot, gordTot);
      for(var contadorComidasSemana = 0;contadorComidasSemana<limiteComidasSemanaToda;contadorComidasSemana++){

        let carb = array[contadorComidasSemana].carboidratos.replace(" Carbs: ", "").replace("g","").replace(",",".").trim();
        let prot = array[contadorComidasSemana].proteinas.replace(" Protein: ", "").replace("g","").replace(",",".").trim();
        let gord = array[contadorComidasSemana].gorduras.replace(" Fat: ", "").replace("g","").replace(",",".").trim();
        carb = Math.round(Number(carb) * 100) / 100;
        prot = Math.round(Number(prot) * 100) / 100;
        gord = Math.round(Number(gord) * 100) / 100;

        

        carbTotSemana = carbTotSemana + Number(carb);
        protTotSemana = protTotSemana + Number(prot);
        gordTotSemana = gordTotSemana + Number(gord);
        carbTotSemana = Math.round(carbTotSemana * 100) / 100;
        protTotSemana = Math.round(protTotSemana * 100) / 100;
        gordTotSemana = Math.round(gordTotSemana * 100) / 100;

        console.log("carbTotSemana, protTotSemana, gordTotSemana",carbTotSemana, protTotSemana, gordTotSemana);

        if(contadorComidasSemana < limiteComidasDiasCorridos){
          if(contadorComidasDia == numRefeicoesNoDia && objetivo == "perder"){
            contadorComidasDia = 0;
            continue
          }
          carbTot = carbTot + Number(carb);
          protTot = protTot + Number(prot);
          gordTot = gordTot + Number(gord);
          carbTot = Math.round(carbTot * 100) / 100;
          protTot = Math.round(protTot * 100) / 100;
          gordTot = Math.round(gordTot * 100) / 100;
          contadorComidasDia++;
        }
      }
      this.setState({carbTotalConsumido: carbTot});
      this.setState({protTotalConsumido: protTot});
      this.setState({gordTotalConsumido: gordTot});
      this.setState({carbTotalSemana: carbTotSemana});
      this.setState({protTotalSemana: protTotSemana});
      this.setState({gordTotalSemana: gordTotSemana});
      this.calculateGraph();
    })
    .catch(e => { console.log(e);});
  }

  componentDidMount(){
    this.loadUserInfo();
    this.loadFoods();
  }

  calculateGraph(){
    let porcentagemCarboidratos = this.state.carbTotalConsumido/this.state.carbTotalSemana;
    let porcentagemProteinas = this.state.protTotalConsumido/this.state.protTotalSemana;
    let porcentagemGorduras = this.state.gordTotalConsumido/this.state.gordTotalSemana;
    this.state.data.data = [porcentagemProteinas, porcentagemCarboidratos, porcentagemGorduras];
    this.forceUpdate();
  }

  loadUserInfo = () =>{
    var result =  fetch('http://192.168.15.9:4548/users/'+SessaoSingleton.getInstance().getUserID(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => 
      response.json().then(data => ({
        data: data,
        status: response.status
    }))
    ).then(response => {
      let userInfo = response.data;
      this.setState({pesoUser: userInfo[0].peso, objetivoUser: userInfo[0].objetivo})
      console.log("primeiro aqui");
    })
    .catch(e => { console.log(e);});
  }

  render() {
    
    return (
      <>
      <View style={styles.card}>
        <Text style={{color:"#227B22", marginBottom:10, fontWeight:"normal"}}>{'\u2B24'} Proteínas: {Math.round(Number(this.state.protTotalConsumido/this.state.protTotalSemana*100) * 100) / 100}%</Text>
        <Text style={{color:"#448F44", marginBottom:10, fontWeight:"normal"}}>{'\u2B24'} Carboidratos: {Math.round(Number(this.state.carbTotalConsumido/this.state.carbTotalSemana*100) * 100) / 100}%</Text>
        <Text style={{color:"#66A366", marginBottom:10, fontWeight:"normal"}}>{'\u2B24'} Gorduras: {Math.round(Number(this.state.gordTotalConsumido/this.state.gordTotalSemana*100) * 100) / 100}%</Text>      
      <ProgressChart
          data={this.state.data ? this.state.data : null}
          width={Dimensions.get('window').width+50}
          height={250}
          strokeWidth={16}
          radius={32}
          chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              backgroundGradientToOpacity:0,
              backgroundGradientFromOpacity:0,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 102, 0, ${opacity})`,
              
              propsForDots: {
                strokeWidth: "0",
                stroke: "#FFF",
              },
              propsForLabels: {
                strokeWidth: "0",
                x:100,
                textAnchor:"start",
                fontSize:"15"
              },
            }}
          hideLegend={true}
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
    labels:{
      color:"#666666",
      marginBottom:10,
      fontWeight:"normal"
    },
    card:{
      width:'100%',
      backgroundColor:"#fff",
      padding:10,
      margin: 20,
      borderRadius:6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.32,
      shadowRadius: 15.46,
      elevation: 9,
    }
});