import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, FlatList,StyleSheet,TouchableHighlight} from 'react-native';
import DetalhesCelula from './DetalhesCelula.js';
import ImagemCentralDetalhesCardapio from "./ImagemCentralDetalhesCardapio";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider,Icon } from 'react-native-elements';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        { id: "0", diaDaSemana: "Segunda-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg")},
        { id: "1", diaDaSemana: "Terça-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg")},
        { id: "2", diaDaSemana: "Quarta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg")},
        { id: "3", diaDaSemana: "Quinta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg")},
        { id: "4", diaDaSemana: "Sexta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg")}
      ],
      imagemDoCardapio: require("./src/Imagens/comida.jpg"),
      titulo: 'Titulo',
      text: '',
      totalCalorias: "2500",
      kcal: 0,
      foods:[],
    }
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
  componentDidMount(){
    this.loadFoods();
  }

  navigationAct(item){
    console.log(item)
    this.props.navigation.navigate("DetalhesDiaDoCardapio",{titulo:'tei',calorias:'300'})
  }

  render() {
    const { navigation } = this.props;
    // this.pegarComidaDaSemana();
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "98%", }}>
        <LinearGradient
          colors={['#52FFBA', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600,
          }}
        />

        <ImagemCentralDetalhesCardapio
          length={this.state.foods.length}
          kcal={this.state.kcal}
        >
        </ImagemCentralDetalhesCardapio>
        <View style={{alignItems: "center",flexDirection:'row'}}>
          <View style={[styles.card,{padding:10,width:'30%',height:50,marginTop:30,zIndex: 1,marginLeft:55,}]} >
                  <Text style={styles.text}>Sua semana</Text>  
                  
                  
          </View>
          <View style={{padding:10,marginTop:30,zIndex: 1}}>
            
          <View style={{alignItems: "center",flexDirection:'row'}}>
                  <TouchableHighlight onPress={() => {navigation.navigate("Perfil")}}>
                      <View>
                        <Icon
                          raised
                          name='user'
                          type='font-awesome'
                          color='#0FB830'
                          containerStyle={{marginLeft: 30}}
                          size={20}
                        />
                      </View>
                </TouchableHighlight> 
                

                <TouchableHighlight onPress={() => {navigation.navigate("SearchFood")}}>
                      <View>
                        <Icon
                          raised
                          name='plus'
                          type='font-awesome'
                          color='#0FB830'
                          containerStyle={{marginLeft: 30}}
                          size={20}
                        />
                      </View>
                </TouchableHighlight>   
          </View>
          </View>    
          <Divider style={{backgroundColor: '#0FB830', height:3,position:'absolute',width:'100%',zIndex: -1,marginTop:15,borderRadius:5}} />                
        </View>
        

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          style={{ top: "2%", paddingBottom: 5, backgroundColor: "transparent", height: "30%" }}
          renderItem={({ item }) => {
            return (//navigation.navigate("DetalhesDiaDoCardapio", { titulo: item.diaDaSemana,caloriasCardapio: item.calorias})
              <TouchableOpacity style={{ flex: 1, backgroundColor: "transparent" }} onPress={() => this.navigationAct(item)} >
                <View style={{ 
                  flex: 1, 
                  justifyContent: 'center',
                   alignItems: 'center', 
                   paddingBottom: 5, 
                   backgroundColor: "transparent", 
                   paddingTop: 5 
                   }}>
                  <DetalhesCelula
                    diaDaSemana={item.diaDaSemana}
                    descricao={item.descricao}
                    imagemCelula={item.imagemCelula}
                    calorias={item.calorias}
                    base={'asd'}
                  >
                  </DetalhesCelula>
                </View>
              </TouchableOpacity>
            );
          }}
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  card:{
    alignItems: 'center',
    justifyContent:'center',
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
  text:{
    textAlign:'center',
    padding:2,
    margin:5,
    fontWeight:'normal',
    fontSize:15,
    alignItems: 'center',
    
  }
});
{/* <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={() => navigation.navigate("Perfil")} >
              <Icon
                name='account-circle'
                size={20}
                color='#52FFBA'
                style={{ height: 25, width: 25 }} />
              <Text style={{ fontSize: 16, color: '#52FFBA' }}>Seu perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={() => navigation.navigate("SearchFood")} >
                <Text style={{ fontSize: 16, color: '#52FFBA' }}>Adicionar mais</Text>
                <Icon
                  name='add-circle'
                  size={20}
                  color='#52FFBA'
                  style={{ height: 25, width: 25 }} />
</TouchableOpacity> */}
