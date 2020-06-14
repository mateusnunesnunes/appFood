import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, FlatList,StyleSheet,TouchableHighlight, TouchableHighlightBase} from 'react-native';
import DetalhesCelula from './DetalhesCelula.js';
import ImagemCentralDetalhesCardapio from "./ImagemCentralDetalhesCardapio";
import { LinearGradient } from 'expo-linear-gradient';
import { Divider,Icon } from 'react-native-elements';


export default class DetalhesCardapio extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        { id: "0", diaDaSemana: "Segunda-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:'1.712',base:'Começe bem o seu dia!'},
        { id: "1", diaDaSemana: "Terça-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:'2.000',base:'Nada como um dia inteiro pela frente!'},
        { id: "2", diaDaSemana: "Quarta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:'1.813',base:'Novo dia novas superações!'},
        { id: "3", diaDaSemana: "Quinta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:'2.476',base:'Continue firme com AppFood!'},
        { id: "4", diaDaSemana: "Sexta-Feira", descricao: "6 Alimentos diversos!", imagemCelula: require("./src/Imagens/garfoEColher.jpg"),calorias:'2.089',base:'Final de semana chegando!'}
      ],
      imagemDoCardapio: require("./src/Imagens/comida2.png"),
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

  foodOrganizerDay(foodOrigin,day){ 
    let foodReturn = [];
    let inicio = 0;
    let fim = 5;
    switch (day) {
      case 'seg':
        console.log("seg")
        inicio = 0
        fim = 5
        break;
      case 'ter':
        console.log("ter")
        inicio = 6
        fim = 11
        break;
      case 'qua':
        console.log("qua")
        inicio = 12
        fim = 17
        break;
      case 'qui':
        console.log("qui")
        inicio = 18
        fim = 23
        break;
      case 'sex':
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


  navigationAct(item){
    let id = item.id;
    let dia = ''
    console.log("id = "+id)
    switch (parseInt(id)) {
      case 0:
        console.log("seg")
        dia = "seg"
        break;
      case 1:
        console.log("ter")
        dia = "ter"
        break;
      case 2:
        console.log("qua")
        dia = "qua"
        break;
      case 3:
        console.log("qui")
        dia = "qui"
        break;
      default:
        console.log("sex")
        dia = "sex"
        break;
    }
    let arrayFood = this.state.foods;
    let arrayFoodDay = this.foodOrganizerDay(arrayFood,dia);
    console.log('indo '+item.diaDaSemana)
    this.props.navigation.navigate("DetalhesDiaDoCardapio",{titulo:item.diaDaSemana,comidas:arrayFoodDay})
    
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
         title={'Semana Fitness'}
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
                    base={item.base}
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
