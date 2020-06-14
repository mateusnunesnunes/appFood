import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import SessaoSingleton from './SessaoSingleton';

export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'gfjgabriel@gmail.com',
      senha:'1234'
    }
  }

   _onClickLogin = async() => {
     console.log("Cheguei login")
    if(this.state.email == "" || this.state.senha == ""){
      Alert.alert("Atenção", "Preencha todos os campos para continuar");
      return false;
    } else {
      var result = await fetch('http://192.168.100.4:4548/login', {
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
          //this.props.navigation.navigate('SearchFood');
          this.props.navigation.navigate('Perfil');
        }
      }else if(response.status == 203){
        Alert.alert("Atenção", "O usuário informado não existe", [
          { text: "Cadastrar", onPress: () => {this.props.navigation.navigate('Cadastro')}},
          {text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"}
          ]);
      } else if (response.status == 500){
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
    padding:5,
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
});
