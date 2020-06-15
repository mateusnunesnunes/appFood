import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, Button, TouchableOpacity,Alert} from 'react-native';

export default class DadosLogin extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      confirmSenha:'',
      showAlert: false,
      textAlert:""
    }
    this.clickAvancar = this.clickAvancar.bind(this);
    this.clickCancelar = this.clickCancelar.bind(this);
    this.validarCamposLogin = this.validarCamposLogin.bind(this);
  }

  clickAvancar(){
    if (this.validarCamposLogin()){
      this.props._onClickAvancar(this.state.email.trim(), this.state.senha.trim(), this.state.confirmSenha.trim());
    }
    
  }

  clickCancelar(){
    this.props._onClickCancelar();
  }

  validarCamposLogin(){
    let estado = this.state;
    if(estado.email == "" || estado.senha == "" || estado.confirmSenha == ""){
      this.setState({showAlert:true, textAlert: "Preencha todos os campos para continuar"});
      return false;
    }
    if (estado.senha != estado.confirmSenha){
      this.setState({showAlert:true, textAlert: "Atenção: As senhas não conferem"});
      return false;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(estado.email) === false) {
      this.setState({showAlert:true, textAlert: "Atenção: O email preenchido é inválido"});
      return false;
    }
    return true;
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
  render() {
    return (
        
        <View style={styles.body}>
          {this._renderAlert()}
          <View style={styles.viewTitulo}>
              <Text style={styles.titulo}>Cadastro</Text>
          </View>  

          <View style={styles.viewText}>
              <Text style={styles.texto}>E-mail</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail..."
                  placeholderTextColor="#ccc"
                  autoCapitalize = 'none'
                  onChangeText={(email) => this.setState({email}) }
                  value={this.state.email}
              />
          </View>
      
          <View style={styles.viewText}>
              <Text style={styles.texto}>Senha</Text>
              <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Digite sua senha..."
                  placeholderTextColor="#ccc"
                  autoCapitalize = 'none'
                  onChangeText={(senha) => this.setState({senha}) }
                  value={this.state.senha}
              />
          </View>

          <View style={styles.viewText}>
              <Text style={styles.texto}>Confirmar senha</Text>
              <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Digite novamente sua senha..."
                  placeholderTextColor="#ccc"
                  autoCapitalize = 'none'
                  onChangeText={(confirmSenha) => this.setState({confirmSenha}) }
                  value={this.state.confirmSenha}
              />
          </View>

          <View style={styles.viewButtons}>
            <TouchableOpacity onPress = {this.clickAvancar}>
              <View style = {{backgroundColor: '#fff', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Avançar</Text>
              </View>
            </TouchableOpacity>

            <View style={{height:20}}>
            </View>

            <TouchableOpacity onPress = {this.clickCancelar}>
              <View style = {{backgroundColor: '#fff', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Cancelar</Text>
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
    backgroundColor: '#fff',
  },
  input:{
    height: 50, 
    fontSize:16,
    borderBottomColor:'#37db9a',
    borderBottomWidth: 1,
    padding:10,
    color:'black',
  },
  viewText:{
    marginTop:30,
    marginBottom:20,
    height: 40, 
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#fff'
  },
  viewButtons:{
    marginTop:50,
    height: 100, 
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#fff'
  },
  viewTitulo:{
    marginBottom:30,
    width:'90%'
  },
  titulo:{
    fontSize:24,
    color:'black',
    fontWeight:'bold',
    borderBottomColor: '#37db9a',
    borderBottomWidth:2,
    paddingBottom:10,
  },
  texto:{
    color:'black',
    fontWeight: "bold",
    fontSize:15,
  },
  textoNPossuiConta:{
    color:'black',
    fontSize:12
  },
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
