import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, TouchableHighlight, Dimensions} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SearchFood extends Component{

  constructor(){
    super();
    this.state = {
      data:[],
      itensAdd:["sss"],
      food:'',
      loading: false,
      
    }
    this.onClickAddItem = this.onClickAddItem.bind(this);
    
  }

  loadFoods = () => {
    fetch('http://192.168.15.4:1337/foods/search/'+this.state.food+'/1/50')
    .then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
  }

  componentDidMount(){
    this.loadFoods();
  }

  onClickAddItem(item){
      var chave = item.food_id
      this.setState({itensAdd: [this.state.itensAdd], chave})
   // Alert.alert()
  }

  loadingScreen(){
    if(this.state.loading){
      return(<View style={styles.load}><IconFeather style={styles.loadIcon} name="loader" size={20} color="#000"/></View>)
    }else{
      return(
<FlatList
            data={this.state.data}
            renderItem={({item}) => (
            <View style={styles.viewItem}>
                <View style={styles.viewDescritivo}>
                    <Text style={styles.titulo}>{item.food_name}</Text>
                    <Text style={styles.descricao}>{item.food_description}</Text>
                </View>
                <TouchableHighlight style={styles.touchableHighlightAdd}
                    key={item.key}
                    onPress={() => this.onClickAddItem(item)}
                >
                    <View style={styles.viewAddBtn}>
                        <IconMaterialIcons key={item.key} style={styles.addIcon} name="add-circle-outline" size={30} color="#37db9a"/>
                    </View>
                </TouchableHighlight>
            </View>
            )}
            keyExtractor={item => item.food_id}
        >
          
        </FlatList>
      )
    }
  }

  render() {
  const textInputComponents = this.state.itensAdd.map(type => <Text>{type}</Text>)
    return (
      <>
      
      <View style={styles.body} >
        
        <View style={styles.viewText}>
            <IconFeather style={styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
                style={styles.input}
                placeholder="Digite o alimento que você procura"
                
                placeholderTextColor="#ccc"
                onChangeText={(food) => this.setState({food: food, loading: true}, () => {this.setState({loading: false}, this.loadFoods())}) }
                value={this.state.food}
            />
            
        </View>
        <View>
            {textInputComponents}
        </View>
        <View style={styles.viewList}>
        {this.loadingScreen()}
        
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
        paddingLeft:5,
        backgroundColor:'#FAFDFF',
        flex:1,
        alignItems:'center',justifyContent:'center'
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
      },
      viewDescritivo:{
        flex:5,
        
      },
      viewAddBtn:{
        flex:1,
        justifyContent: "center",
      },
      load:{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'},
      loadIcon:{
        
      }
});