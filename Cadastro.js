import React, {Component} from 'react';
import {Platform, View,} from 'react-native';
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
    //TODO Volta para o Login
  }

  cadastrarUsuario(){
    //TODO Envia dados para o servidor
  }

  _onClickAvancar(email, senha, confirmSenha){
    this.setState({showDadosLogin: false, email: email, senha: senha, confirmSenha: confirmSenha});
    //alert(this.state.email+"  "+this.state.senha+"  "+this.state.confirmSenha)
    //alert(email+"  "+senha+"  "+confirmSenha)
  }

  _onClickCancelar(){
    alert("cliquei cancelar");
    this.redirectLogin();
  }

  _onClickCriarConta(nome, idade, altura, peso, pesoMeta){
    alert("cliquei criar conta");
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
