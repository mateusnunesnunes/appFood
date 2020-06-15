import React, {Component} from 'react';
import {Platform, View, Alert,StyleSheet} from 'react-native';
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

      showAlert: false,
      textAlert:""

    }

    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }

  redirectLogin(){
    this.props.navigation.navigate('Login')
  }

  async cadastrarUsuario(){
    var result = await fetch('http://192.168.15.5:4548/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            name:  this.state.nome.trim(),
            email: this.state.email.trim(),
            dataNascimento:  this.state.dataNascimento.trim(),
            senha: this.state.senha.trim(),
            peso: this.state.peso.trim(),
            objetivo: this.state.pesoMeta.trim(),
            altura: this.state.altura.trim()
      })
    })
    .then(response => 
      response.json().then(data => ({
        data: data,
        status: response.status
    }))
    ).then(response => {
      if(response.status == 201){
        this.redirectLogin();
      }else if(response.status == 203){
        this.setState({showAlert:true, textAlert: "Já existe um usuário com o e-mail informado. Verifique seu e-mail e tente novamente"});
      } else if (response.status == 500){
        this.setState({showAlert:true, textAlert: "Erro do sistema: Aguarde um pouco e tente novamente"});
      }else{
        this.setState({showAlert:true, textAlert: "Erro: Exceção não tratada, entre em contato com os desenvolvedores ou tente novamente mais tarde"});
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

  _renderAlert = () => {
    if (this.state.showAlert) {
        return (
          <View style={styles.card} >
            <Text style={styles.text}>{this.state.textAlert}</Text>
          </View>
        );
    } else {
        return null;
    }
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
      {this._renderAlert()}
      {this._renderDados()}
      </>
    );
  }
}
const styles = StyleSheet.create({
  card:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    position:"absolute",
    top:40
  },
  text:{
    textAlign:'center',
    padding:5,
    margin:5,
    fontWeight:'normal',
    fontSize:13,
    alignItems: 'center',
    color:"red"
  }
});