import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput} from 'react-native';

export default class App extends Component{



  constructor(){
    super();
    this.state = {
      data:[],
      text: ''
    }
  }

  loadFoods = (params) => {
    fetch('http://192.168.0.103:1337/foods/search/'+params+'/1/25')
    .then(res => res.json() )
    .then(res => {
      this.setState({
        data:res.foods.food || []
      })
    })
  }

  render() {
    return (
      <View style={styles.container} >
       <TextInput
          style={styles.input}
          placeholder="Pesquise a comida!"
          onChangeText={(text) => this.setState({text}) }
          onEndEditing={(text) => this.loadFoods(this.state.text)}
          value={this.state.text}
        />
         <View  style={styles.containerIn}>
          
          <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.flatview} >
                  <View>
                      <Text style={styles.name}>{item.food_name}</Text>
                      <Text style={styles.email}>{item.food_description}</Text>
                  </View>
            </View>
          )}
          keyExtractor={item => item.food_id}
        />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input:{
    marginTop:50,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    width:'70%',
    borderRadius:5,
    paddingLeft:5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10,
    width:'100%',
    height:'50%'
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
});
