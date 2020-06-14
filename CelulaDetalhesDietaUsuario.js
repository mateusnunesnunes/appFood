import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image,FlatList,Item} from 'react-native';

import { Icon,Divider } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from './src/components/Card';
import StepIndicator from 'react-native-step-indicator';
import { json } from 'body-parser';
import { forEach } from './users';



export default class CelulaDetalhesDietaUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kcal: 0,
      foods:[],
      currentPosition: 3
    };
  }
  
  componentDidMount(){
    this.loadFoods();
  }
  
 



  loadFoods(){
    let kcal = 0;
    var result = fetch('http://192.168.100.4:4548/listaComidas', {
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
      let food = []
      response.data.comidas.forEach(element => {
        //contar kcal total e projetar na tela
        let descricao = element.descricao;
        let arraySplitado = descricao.split(' ');
        kcal += parseInt(arraySplitado[arraySplitado.length - 2])
        food.push(element)
      });
      this.setState({kcal:kcal})
      this.setState({foods:food})
    })
    .catch(e => { console.log(e);});
    
  }
  
  foodOrganizerDay(foodOrigin,day){ 
    let foodReturn = [];
    let inicio = 0;
    let fim = 5;
    switch (day) {
      case 'Seg':
        console.log("seg")
        inicio = 0
        fim = 5
        break;
      case 'Ter':
        console.log("ter")
        inicio = 6
        fim = 11
        break;
      case 'Qua':
        console.log("qua")
        inicio = 12
        fim = 17
        break;
      case 'Qui':
        console.log("qui")
        inicio = 18
        fim = 23
        break;
      case 'Sex':
        console.log("sex")
        inicio = 24
        fim = 29
        break;
      default:
        console.log("nenhum")
        console.log(inicio+"   "+fim)
        break;
    }
    
    foodOrigin.forEach(element => {
      let index  =foodOrigin.indexOf(element);
      if( index >= inicio && index <= fim ){
        foodReturn.push(foodOrigin[index])
      }
    })
    console.log(foodReturn)
    return foodReturn;
  }

  foodOrganizerHour(foodOrigin,hour){ 
    let inicio = 0
    let fim = 0
    let arrayRetorno = []
    if(hour < 9){
      inicio = 0
      fim = 0
    }
    else if(hour < 13){
      inicio = 1
      fim = 2
    }
    else if(hour < 17){
      inicio = 3
      fim = 3
    }
    else{
      inicio = 4
      fim = 5
    }
    foodOrigin.forEach(element => {
      let index  =foodOrigin.indexOf(element);
      if( index >= inicio && index <= fim ){
        arrayRetorno.push(foodOrigin[index])
      }
    })
    return arrayRetorno
  }

  

  buttonCalled(){
    console.log('tei')
  }
  render() {
    let hour = new Date().getHours();
    let day = new Date().getDay() - 1;
    let inicio = 0;
    let fim = 0;
    if (day > 4){
      day = 0
    }
    

    const diaNome = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]
    
    const dia = diaNome[parseInt(new Date().getDay())];
    console.log("Dia mandando pra func = "+dia)
    let comidas = this.state.foods;
    let comidasDia = this.foodOrganizerDay(comidas,dia);
    let comidasHora = this.foodOrganizerHour(comidasDia,hour);
    
    let primeiraComidaNome = ''
    let primeiraComidaCarb = ''
    let primeiraComidaGord = ''
    let primeiraComidaProt = ''

    let segundaComidaNome = ''
    let segundaComidaCarb = ''
    let segundaComidaGord = ''
    let segundaComidaProt = ''

    comidasHora.forEach(elemt => {
      let index  =comidasHora.indexOf(elemt);
      if(index == 0){
        primeiraComidaNome = elemt.nome
        primeiraComidaCarb = elemt.carboidratos
        primeiraComidaGord = elemt.gorduras
        primeiraComidaProt = elemt.proteinas
      }
      else{
        segundaComidaNome = elemt.nome
        segundaComidaCarb = elemt.carboidratos
        segundaComidaGord = elemt.gorduras
        segundaComidaProt = elemt.proteinas
      }
    })
    


    return (
      <View style={styles.container}>
          <View style={[styles.container,{flexDirection:'row'}]}>
            <View style={styles.date}>
                  <Text style={styles.dayText}>{this.props.dia}</Text>
                  <Text style={styles.dayStrText}>{this.props.diaStr}</Text>
            </View>
            <Card 
              height={40}
              width={'60%'}
              content={'Suas calorias semanais são: '+this.state.kcal}
            ></Card>

            <TouchableHighlight onPress={() => {this.buttonCalled()}}>
                <View>
                  
                  <Icon
                    raised
                    name='plus'
                    type='font-awesome'
                    color='#0FB830'
                    containerStyle={{marginLeft: -10}}
                    size={20}
                  />
                  
                </View>
            </TouchableHighlight>   
        </View>
        <View style={[styles.card,{width:'80%'}]} >
          
          <View style={styles.cardStep}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={day}
                labels={labels}
            />
              <Divider style={{marginTop:10,backgroundColor: '#0FB830', height:1}} />
              <Text style={styles.textTitle}>Próxima comida:</Text>

              <Text style={styles.textFood}>{primeiraComidaNome}</Text>
              <View style={[styles.container,{flexDirection:'row'}]}>
                <Text style={styles.textMacro}>{primeiraComidaProt}</Text>
                <Text style={styles.textMacro}>{primeiraComidaCarb}</Text>
                <Text style={styles.textMacro}>{primeiraComidaGord}</Text>
              </View>
              

              <Text style={styles.textFood}>{segundaComidaNome}</Text>
              <View style={[styles.container,{flexDirection:'row'}]}>
               
              <Text style={styles.textMacro}>{segundaComidaProt}</Text>
                <Text style={styles.textMacro}>{segundaComidaCarb}</Text>
                <Text style={styles.textMacro}>{segundaComidaGord}</Text>
              </View>

          </View>
          
        </View>
      </View>


      
    );
  }
}
const styles = StyleSheet.create({
  textFood:{
    textAlign:'center'
  },
  textTitle:{
    margin:5,
    fontWeight:'bold',
    fontSize:12
  },
  textMacro:{
    padding: 5,
    margin:5,
    
    borderColor:'black',
    borderRadius:5,
    backgroundColor:'#52FFBA',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  cardStep:{
    margin:10
  },
  card:{
    margin: 20,
    backgroundColor:'white',
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  dayText:{
    fontWeight:'bold',
    fontSize:20
  },
  dayStrText:{
    fontSize:20
  },
  date:{
    backgroundColor:'#white',
    padding: 5,
    borderRadius:6,
  },
});
const labels = ["Segunda  ","Terça  ","Quarta  ","Quinta  ","Sexta  "];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0FB830',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0FB830',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0FB830',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0FB830',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0FB830',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0FB830'
}