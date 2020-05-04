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
      dataNascimento:'',
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
    var result = await fetch('http://192.168.15.10:4548/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            name:  this.state.nome,
            email: this.state.email,
            dataNascimento:  this.state.dataNascimento,
            senha: this.state.senha,
            peso: this.state.peso,
            objetivo: this.state.pesoMeta,
            altura: this.state.altura
      })
    })
    .then(response => {
      console.log("Status" + response.status);
      this.setState({status: response.status});
      response.json();
    })
    .then(response => {
      if(this.state.status == 201){
        Alert.alert(
          "Sucesso", 
          "Usuário cadastrado!",
          [
          { text: "OK", onPress: () => {this.redirectLogin(); this.setState({showDadosLogin: true})}}
          ]
        );
      }else if(this.state.status == 203){
        Alert.alert("Atenção", "Já existe um usuário com o e-mail informado. Verifique seu e-mail e tente novamente");
      } else if (this.state.status == 500){
        Alert.alert("Erro do sistema", "Aguarde um pouco e tente novamente");
      }else{
        Alert.alert("Erro", "Exceção não tratada, entre em contato com os desenvolvedores ou tente novamente mais tarde");
      }
    })
    .catch(e => { console.log(e);Alert.alert("Erro do sistema", JSON.stringify(e)) });
  }

  _onClickAvancar(email, senha, confirmSenha){
    this.setState({showDadosLogin: false, email: email, senha: senha, confirmSenha: confirmSenha});
  }

  _onClickCancelar(){
    this.setState({showDadosLogin: true, email: "", senha: "", confirmSenha: "", nome: "", dataNascimento: "", altura: "", peso: "", pesoMeta: ""});
    this.redirectLogin();
  }

  _onClickCriarConta(nome, dataNascimento, altura, peso, pesoMeta){
    console.log(nome+" "+altura+" "+peso+" "+pesoMeta);
    this.setState({nome: nome, dataNascimento: dataNascimento, altura: altura, peso: peso, pesoMeta: pesoMeta}, () => this.cadastrarUsuario());
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
