import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,TextInput, Button, TouchableOpacity,Alert} from 'react-native';

export default class DadosLogin extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      confirmSenha:'',
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
      Alert.alert("Atenção", "Preencha todos os campos para continuar");
      return false;
    }
    if (estado.senha != estado.confirmSenha){
      Alert.alert("Atenção", "As senhas não conferem");
      return false;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(estado.email) === false) {
      Alert.alert("Atenção", "O email preenchido é inválido");
      return false;
    }
    return true;
  }

  render() {
    return (
        
        <View style={styles.body}>
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
              <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                            justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
              >
                <Text style = {{color: 'black', fontWeight:'bold'}}>Avançar</Text>
              </View>
            </TouchableOpacity>

            <View style={{height:20}}>
            </View>

            <TouchableOpacity onPress = {this.clickCancelar}>
              <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
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
  viewButtons:{
    marginTop:50,
    height: 100, 
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#FAFDFF'
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
  }
});
