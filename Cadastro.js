import React, {Component} from 'react';
import {Platform, View, Alert,} from 'react-native';
//import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'


import DadosPerfil from './src/components/DadosPerfil';
import DadosLogin from './src/components/DadosLogin';
export default class Cadastro extends Component{

  constructor(){
    super();
    this.state = {
      showDadosLogin: true,

      email:'',
      senha:'',
      confirmSenha:'',

      nome:'',
      idade:'',
      altura:'',
      peso:'',
      pesoMeta:'',

      status: 0
    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }

  redirectLogin(){
    this.props.navigation.navigate('Login')
  }

  async cadastrarUsuario(){
    var result = await fetch('http://192.168.15.4:4548/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            name:  this.state.nome,
            email: this.state.email,
            idade:  20,
            senha: this.state.senha,
            peso: this.state.peso,
            objetivo: this.state.pesoMeta
      })
    })
    .then(response => {
      //this.setState({status: response.status});
      response.json();
    })
    .then(response => {
      if(status == 201){
        Alert.alert(
          "Sucesso", 
          response.success,
          { text: "OK", onPress: () => {this.redirectLogin(); this.setState({showDadosLogin: true})}});
      }else if(status == 203){
        Alert.alert(response.error, "teste");
      } else if (status == 500){
        Alert.alert("Erro do sistema", "Aguarde um pouco e tente novamente");
      }
    })
    .catch(e => { console.log(e);Alert.alert("Erro do sistema", JSON.stringify(e)) });
  }

  _onClickAvancar(email, senha, confirmSenha){
    this.setState({showDadosLogin: false, email: email, senha: senha, confirmSenha: confirmSenha});
  }

  _onClickCancelar(){
    this.setState({showDadosLogin: true, email: "", senha: "", confirmSenha: "", nome: "", idade: "", altura: "", peso: "", pesoMeta: ""});
    this.redirectLogin();
  }

  _onClickCriarConta(nome, idade, altura, peso, pesoMeta){
    console.log(nome+" "+altura+" "+peso+" "+pesoMeta);
    this.setState({nome: nome, idade: idade, altura: altura, peso: peso, pesoMeta: pesoMeta}, () => this.cadastrarUsuario());
  }

  _onClickVoltar(){
    this.setState({showDadosLogin: true});
  }

  _renderDados = () => {
    if(this.state.showDadosLogin){
      return(
        <DadosLogin _onClickAvancar={this._onClickAvancar.bind(this)}  _onClickCancelar={this._onClickCancelar.bind(this)} />
      );
    } else {
      return(
        <DadosPerfil _onClickCriarConta={this._onClickCriarConta.bind(this)}  _onClickVoltar={this._onClickVoltar.bind(this)} />
      );
    }
  }

  render() {
    return (
      <>
      {this._renderDados()}
      </>
    );
  }
}
