import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, Button, TouchableOpacity} from 'react-native';

export default class Login extends Component{

  constructor(){
    super();
    this.state = {
      logado: false,
      inputEditing:{
        borderColor: '#EEE',
      },
      email:'',
      senha:''
    }
  }
  
  onFocus() {
    this.setState({
        borderColor: '#FFF'
    })
  } 

  render() {
    return (
        
      <View style={styles.body} >
        <View style={styles.viewLogo}>
          <Text
          style={styles.logo}>
            AppFood
          </Text>
        </View>
        
        <View style={styles.viewText}>
              <Text style={styles.texto}>E-mail</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail..."
                  placeholderTextColor="#ccc"
                  onChangeText={(nome) => this.setState({nome}) }
                  value={this.state.nome}
              />
          </View>
      
          <View style={styles.viewText}>
              <Text style={styles.texto}>Senha</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha..."
                  placeholderTextColor="#ccc"
                  onChangeText={(idade) => this.setState({idade}) }
                  value={this.state.idade}
              />
          </View>
          <View style={styles.viewButtons}>
            <TouchableOpacity onPress = {() => {/* do this */}}>
              <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Login</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.viewTextNPossuiConta}>
            <Text
              style={styles.textoNPossuiConta}>
                Ainda não possui uma conta?
              </Text>
            </View>

            <TouchableOpacity onPress = {() => {/* do this */}}>
              <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Criar conta</Text>
              </View>
            </TouchableOpacity>
          </View>
        
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FAFDFF',
  },
  input:{
    height: 40, 
    borderBottomColor:'#37db9a',
    borderBottomWidth: 1,
    paddingLeft:5,
    color:'black',
  },
  viewText:{
    marginTop:30,
    marginBottom:20,
    height: 40, 
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#FAFDFF'
  },
  viewTextNPossuiConta:{
    marginTop: 20, 
    marginBottom:10,
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#F5FCFF'
  },
  viewLogo:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    color:'black',
    fontWeight: "bold",
    fontSize:40,
    marginTop:-70,
    marginBottom:50
  },
  texto:{
    color:'black',
    fontWeight: "bold",
    fontSize:15
  },
  textoNPossuiConta:{
    color:'black',
    fontSize:12
  },
  viewButtons:{
    marginTop:50,
    height: 100, 
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#FAFDFF'
  },
});
