import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList,TextInput, TouchableHighlight, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SessaoSingleton from './SessaoSingleton';

function ItemNotAdded({item, onClickAddItem}){
    return(
      <View style={styles.viewItem}>
        <View style={styles.viewDescritivo}>
            <Text style={styles.titulo}>{item.food_name}</Text>
            <Text style={styles.descricao}>{item.food_description}</Text>
        </View>
        <TouchableHighlight style={styles.touchableHighlightAdd}
            key={item.key}
            onPress={() => onClickAddItem(item)}
        >
            <View style={styles.viewAddBtn}>
                <IconMaterialIcons key={item.key} style={styles.addIcon} name="add-circle-outline" size={30} color="#37db9a"/>
            </View>
        </TouchableHighlight>
      </View>
      );
}

function ItemAdded({item, onClickRemoveItem}){
  return(
    <View style={styles.viewItem}>
      <View style={styles.viewDescritivo}>
          <Text style={styles.titulo}>{item.food_name}</Text>
          <Text style={styles.descricao}>{item.food_description}</Text>
      </View>
      <TouchableHighlight style={styles.touchableHighlightAdd}
          key={item.key}
          onPress={() => onClickRemoveItem(item)}
      >
          <View style={styles.viewAddBtn}>
              <IconMaterialIcons key={item.key} style={styles.addIcon} name="remove-circle-outline" size={30} color="#e82a2a"/>
          </View>
      </TouchableHighlight>
    </View>
    );
}

export default class SearchFood extends Component{

  constructor(){
    super();
    this.state = {
      data:[],
      itensAdd: [],
      food:'',
      loading: false,
      isNadaEncontrado: false
    }
    this.onClickAddItem = this.onClickAddItem.bind(this);
    this._onClickSalvar = this._onClickSalvar.bind(this);
    this.handleExistingItem = this.handleExistingItem.bind(this);
  }

  loadFoods = () => {
    if(this.state.food != ""){
      this.setLoading(true);
      fetch('http://192.168.15.10:1337/foods/search/'+this.state.food+'/1/50')
      .then(res => res.json() )
      .then(res => {
        this.setState({
          data:res.foods.food || []
        }, () => {
          if(this.state.data && this.state.data.length == 0){
            this.setState({isNadaEncontrado: true});
          }else{
            if(this.state.isNadaEncontrado){
              this.setState({isNadaEncontrado: false});
            }
            
          }
        });
        this.setLoading(false);
      })
    }
  }

  handleExistingItem(item){
    if (this.state.itensAdd.some(itens => itens.food_id === item.food_id)){
      return(<ItemAdded item={item} onClickRemoveItem={this.onClickRemoveItem.bind(this)} />);
    } else {
      return(<ItemNotAdded item={item} onClickAddItem={this.onClickAddItem.bind(this)} />);
    }
  }

  componentDidMount(){
    this.loadFoods();
  }

  onClickAddItem(item){
    console.log(item);
    this.setState(this.setState(estadoAnterior => ({itensAdd: [...estadoAnterior.itensAdd, item]})), () => console.log(this.state.itensAdd));
  }

  onClickRemoveItem(item){
    console.log(item);
    var array = [...this.state.itensAdd];
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({itensAdd: array}, () => console.log(this.state.itensAdd));
    }
  }

  setLoading(bool){
    this.setState({loading:bool});
  }
  async _onClickSalvar(){
    var result = await fetch('http://192.168.15.10:4548/insertFood', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            userID:  SessaoSingleton.getInstance().getUserID(),
            itens: this.state.itensAdd
      })
    })
      .then(response => 
        response.json().then(data => ({
        data: data,
        status: response.status
    })) )
      .then(res => {
        if(res.status == 200){
          //this.props.navigation.navigate('Tela');
        }else{
          Alert.alert("Erro do sistema", "Ocorreu um erro no sistema, por favor tente novamente")
        }
      })
  }

  handleResponse(){
    if(this.state.loading){
      return(<View style={styles.load}><ActivityIndicator /></View>)
    }else if(this.state.food == ""){
      return(<View style={styles.load}><Text style={styles.textFlatlist}>Digite a comida que procura no campo acima para carregar a lista</Text></View>)
    }else if(this.state.isNadaEncontrado){
      return(<View style={styles.load}><Text style={{textAlign:"center"}}>Nada foi encontrado com o parâmetro inserido. Tente procurar por uma comida semelhante!</Text></View>)
    }else{
      return(
        <FlatList
            data={this.state.data}
            style={{width:"100%"}}
            renderItem={({item}) => (
              this.handleExistingItem(item)
            )}
            keyExtractor={item => item.food_id}
        >
          
        </FlatList>
      )
    }
  }

  render() {
    return (
      <>
      
      <View style={styles.body} >
        
        <View style={styles.viewText}>
            <IconFeather style={styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="Digite o alimento que você procura"
                placeholderTextColor="#ccc"
                onChangeText={async(food) => {await this.setState({food:food});this.loadFoods()}}
                value={this.state.food}
            />
            
        </View>
        
        <View style={styles.viewList}>
        {this.handleResponse()}
        
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity onPress = {() => {this._onClickSalvar()}}>
              <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Salvar</Text>
              </View>
          </TouchableOpacity>

        </View>

        

      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
    input:{
        height: 40, 
        borderBottomColor:'#37db9a',
        borderBottomWidth: 2,
        paddingLeft:25,
        color:'black',
        fontSize:15
      },
      searchIcon:{
          position: 'absolute',
          left: 5,
          top:10,
          opacity: 0.3
      },
      addIcon:{
        position:'absolute',
        right:5
      },
      viewText:{
        height:40,
        marginTop:30,
        marginBottom:20,
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#FAFDFF'
      },
      viewList:{
        marginTop:30,
        marginBottom:20,
        width:'90%',
        //paddingLeft:5,
        backgroundColor:'#FAFDFF',
        flex:1,
        alignItems:'center',justifyContent:'center',
        borderWidth: 1,
        borderColor: "#37db9a"
      },
      viewButton:{
        height:40,
        marginBottom:20,
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#FAFDFF'
      },
      touchableHighlightAdd:{
        flex:1
      },
      body:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#FAFDFF',
      },
      texto:{
        color:'black',
        fontWeight: "bold",
        fontSize:15,
      },
      textFlatlist:{
        textAlign:"center", 
        padding:15,
        color:"#000"
      },
      descricao:{
        color:'black',
        fontSize:12,
        padding:3
      },
      titulo:{
        color:'black',
        fontWeight: "bold",
        fontSize:15,
        padding:3
      },
      viewItem:{
          borderBottomColor: "#37db9a",
          borderBottomWidth: 1,
          paddingBottom:10,
          paddingTop:10,
          flexDirection:'row',
          width:"100%"
      },
      viewDescritivo:{
        flex:5,
        paddingLeft:5
      },
      viewAddBtn:{
        flex:1,
        justifyContent: "center",
      },
      load:{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'},
      loadIcon:{
        
      }
});