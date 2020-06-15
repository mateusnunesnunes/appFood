import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
}

export default class DadosPerfil extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      dataNascimento:'',
      altura:'',
      peso:'',
      pesoMeta:'',
      avatarSource: null,
      showAlert: false,
      textAlert:""
      
    }
    this.clickVoltar = this.clickVoltar.bind(this);
    this.clickCriarConta = this.clickCriarConta.bind(this);
    this.validarCamposPerfil = this.validarCamposPerfil.bind(this);
    this.onChangeData = this.onChangeData(this);
  }

  clickCriarConta(){
    if(this.validarCamposPerfil()){
      this.props._onClickCriarConta(this.state.nome.trim(), this.state.dataNascimento.trim(), this.state.altura.trim(), this.state.peso.trim(), this.state.pesoMeta.trim());
    } 
  }

  selectPhoto(){
    
  }

  clickVoltar(){
    this.props._onClickVoltar();
  }

  onChangeData(dataNascimento){
    //this.setState({dataNascimento: dataNascimento});

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

  validarCamposPerfil(){
    let estado = this.state;
    if(estado.nome == "" || 
    estado.dataNascimento == "" || 
    estado.altura == "" || estado.peso == "" || estado.pesoMeta == ""){
      this.setState({showAlert:true, textAlert: "Preencha todos os campos para continuar"});
      return false;
    }
    return true;
  }

  getProfilePictureURL(){
    console.log('tei')
  }

  changeDate = (valor) => {
    this.setState({dataNascimento:valor})
  }

  render() {
    return (
                <View style={styles.body}>
{this._renderAlert()}
                    <View style={styles.viewTitulo}>
                        <Text style={styles.titulo}>Cadastro</Text>
                    </View>  


                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#ccc"
                            autoCapitalize = 'words'
                            onChangeText={(nome) => this.setState({nome}) }
                            value={this.state.nome}
                        />
                    </View>
                
                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Data de nascimento</Text>
                        <TextInput
                            
                            style={styles.input}
                            placeholder="Digite sua data de nascimento..."
                            placeholderTextColor="#ccc"
                            autoCapitalize = 'none'
                            onChangeText={(dataNascimento) => this.setState({dataNascimento: dataNascimento}) }
                            value={this.state.dataNascimento}
                        />
                        
                    </View>

                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Altura</Text>
                        <TextInput
                            keyboardType='decimal-pad'
                            style={styles.input}
                            placeholder="Digite sua altura..."
                            placeholderTextColor="#ccc"
                            onChangeText={(altura) => this.setState({altura}) }
                            value={this.state.altura}
                        />
                    </View>

                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Peso</Text>
                        <TextInput
                            keyboardType='decimal-pad'
                            style={styles.input}
                            placeholder="Digite seu peso..."
                            placeholderTextColor="#ccc"
                            onChangeText={(peso) => this.setState({peso}) }
                            value={this.state.peso}
                        />
                    </View>

                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Meta de peso</Text>
                        <TextInput
                            keyboardType='decimal-pad'
                            style={styles.input}
                            placeholder="Digite sua meta de peso..."
                            placeholderTextColor="#ccc"
                            onChangeText={(pesoMeta) => this.setState({pesoMeta}) }
                            value={this.state.pesoMeta}
                        />
                    </View>
                
                    <View style={styles.viewButtons}>
                    <TouchableOpacity onPress = {this.clickCriarConta}>
                        <View style = {{backgroundColor: '#fff', alignItems: 'center', 
                                    justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
                        >
                        <Text style = {{color: 'black', fontWeight:'bold'}}>Criar conta</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{height:20}}>
                    </View>

                    <TouchableOpacity onPress = {this.clickVoltar}>
                        <View style = {{backgroundColor: '#fff', alignItems: 'center', 
                                    justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
                        >
                        <Text style = {{color: 'black', fontWeight:'bold'}}>Voltar</Text>
                        </View>
                    </TouchableOpacity>
                    </View>

                </View>  
            
    );
  }
}
const styles = StyleSheet.create({
    input:{
      height: 50, 
      fontSize:16,
        borderBottomColor:'#37db9a',
        borderBottomWidth: 2,
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
      viewChooseImage:{
        marginTop:30,
        marginBottom:20,
        //height: 100, 
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#fff',
        //flexDirection:'row',
      },
      viewButtons:{
        marginTop:50,
        height: 100, 
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#fff'
      },
      viewButtonsImage:{

      },
      viewTitulo:{
        marginBottom:30,
        width:'90%'
      },
      body:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
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
      image:{
        height: 200,
        width: 200,
        alignContent: 'center',
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
        top:90
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
