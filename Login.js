import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, TouchableOpacity, Alert} from 'react-native';
import SessaoSingleton from './SessaoSingleton';

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

   _onClickLogin = async() => {
    if(this.state.email == "" || this.state.senha == ""){
      Alert.alert("Atenção", "Preencha todos os campos para continuar");
      return false;
    } else {
      var result = await fetch('http://192.168.15.10:4548/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            email: this.state.email,
            senha: this.state.senha,
      })
    })
    .then(response => {
      this.setState({status: response.status});
      response.json();
    })
    .then(response => {
      if(this.state.status == 201){
        SessaoSingleton.getInstance().setIsLogado(false);
        if(SessaoSingleton.getInstance().getIsLogado()){
          // redirecionar para mainPage
        }
        
      }else if(this.state.status == 203){
        Alert.alert("Atenção", "O usuário informado não existe", [
          { text: "Cadastrar", onPress: () => {this.props.navigation.navigate('Cadastro')}},
          {text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"}
          ]);
      } else if (this.state.status == 500){
        Alert.alert("Erro do sistema", "Aguarde um pouco e tente novamente");
      }else{
        Alert.alert("Erro", "Exceção não tratada, entre em contato com os desenvolvedores ou tente novamente mais tarde");
      }
    })
    .catch(e => { console.log(e);Alert.alert("Erro do sistema", JSON.stringify(e)) });
    }
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
                  onChangeText={(email) => this.setState({email}) }
                  value={this.state.nome}
              />
          </View>
      
          <View style={styles.viewText}>
              <Text style={styles.texto}>Senha</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha..."
                  placeholderTextColor="#ccc"
                  onChangeText={(senha) => this.setState({senha}) }
                  value={this.state.senha}
              />
          </View>
          <View style={styles.viewButtons}>
            <TouchableOpacity onPress = {() => {this._onClickLogin()}}>
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

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Cadastro') }>
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
