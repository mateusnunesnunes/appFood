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
    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }

  redirectLogin(){
    this.props.navigation.navigate('Login')
  }

  cadastrarUsuario(){
    fetch('10.0.2.2:4548/registerPOST', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.senha,
        name: this.state.nome,
        idade: this.state.idade,
        peso:this.state.peso,
        objetivo: this.state.pesoMeta
      }),
    }).then((response) => alert(response)).catch((error) => alert(error));
  }

  _onClickAvancar(email, senha, confirmSenha){
    
    this.setState({showDadosLogin: false, email: email, senha: senha, confirmSenha: confirmSenha});
    
  }

  _onClickCancelar(){
    this.setState({showDadosLogin: true, email: "", senha: "", confirmSenha: "", nome: "", idade: "", altura: "", peso: "", pesoMeta: ""});
    this.redirectLogin();
  }

  _onClickCriarConta(nome, idade, altura, peso, pesoMeta){
    
    this.setState({showDadosLogin: true, nome: nome, idade: idade, altura: altura, peso: peso, pesoMeta: pesoMeta});
    this.cadastrarUsuario();
    this.redirectLogin();
    
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
