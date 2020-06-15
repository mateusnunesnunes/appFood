import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import SessaoSingleton from './SessaoSingleton';
import Card from './src/components/Card';

export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      showAlert: false,
      textAlert:""
    }
    this._renderAlert = this._renderAlert.bind(this);
  }

   _onClickLogin = async() => {
     console.log("Cheguei login")
    if(this.state.email == "" || this.state.senha == ""){
      this.setState({showAlert:true, textAlert: "Preencha todos os campos para continuar"});
      return false;
    } else {
      var result = await fetch('http://192.168.15.5:4548/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            email: this.state.email.trim(),
            senha: this.state.senha.trim(),
      })
    }).then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
  )).then(response => {
    console.log("Retorno")
      if(response.status == 201){
        SessaoSingleton.getInstance().setIsLogado(true);
        if(SessaoSingleton.getInstance().getIsLogado()){
          SessaoSingleton.getInstance().setUserID(response.data.success[0]["id"]);
          console.log(SessaoSingleton.getInstance().getUserID());
          this.props.navigation.navigate('Perfil');
        }
      }else if(response.status == 203){
        this.setState({showAlert:true, textAlert: "O usuário informado não existe"});
      } else if (response.status == 500){
        this.setState({showAlert:true, textAlert: "Erro do sistema: Aguarde um pouco e tente novamente"});
      }else{
        this.setState({showAlert:true, textAlert: "Erro: Exceção não tratada, entre em contato com os desenvolvedores ou tente novamente mais tarde"});
      }
    })
    .catch(e => { console.log(e);Alert.alert("Erro do sistema", JSON.stringify(e)) });
    }
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
        
      <View style={styles.body} >
        {this._renderAlert("teste")}
        <View style={styles.viewLogo}>
        <Image style={{ height: "100%", width: "100%", borderRadius: 8 }} source={require("./src/Imagens/logo.png")}></Image>
        </View>
        
        <View style={styles.viewText}>
              <Text style={styles.texto}>E-mail</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail..."
                  placeholderTextColor="#ccc"
                  autoCapitalize = 'none'
                  onChangeText={(email) => {
                    
                    this.setState({email})
                } }
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
          <View style={styles.viewButtons}>
            <TouchableOpacity onPress = {() => {this._onClickLogin()}}>
              <View style = {{backgroundColor: '#fff', alignItems: 'center', 
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
              <View style = {{backgroundColor: '#fff', alignItems: 'center', 
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
    backgroundColor: '#fff',
  },
  input:{
    height: 50, 
    fontSize:16,
    padding:10,
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
    backgroundColor:'#fff'
  },
  viewTextNPossuiConta:{
    marginTop: 20, 
    marginBottom:10,
    width:'90%',
    paddingLeft:5,
    backgroundColor:'#fff'
  },
  viewLogo:{
    justifyContent: 'center',
    alignItems: 'center',
    height:200,
    width:200
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
    backgroundColor:'#fff'
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
