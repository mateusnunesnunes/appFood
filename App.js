import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList} from 'react-native';
export default class App extends Component{

  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  loadFoods = () => {
    fetch('http://192.168.100.4:1337/foods/search/apple/1/50')
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


  render() {
    return (
      <View style={styles.container} >
       
      <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          <View>
                <View>
                    <Text>{item.food_description}</Text>
                </View>
          </View>
        )}
        keyExtractor={item => item.food_id}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   
});