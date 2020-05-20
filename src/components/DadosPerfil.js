import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
      avatarSource: null
      
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
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  clickVoltar(){
    this.props._onClickVoltar();
  }

  onChangeData(dataNascimento){
    //this.setState({dataNascimento: dataNascimento});

  }

  validarCamposPerfil(){
    let estado = this.state;
    if(estado.nome == "" || 
    estado.dataNascimento == "" || 
    estado.altura == "" || estado.peso == "" || estado.pesoMeta == ""){
      Alert.alert("Atenção", "Preencha todos os campos para continuar");
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

                    <View style={styles.viewChooseImage}>
                        <View style = {{}}
                          >
                          <Image 
                            style={styles.image}
                            source={this.state.avatarSource != null ? this.state.avatarSource : require('../Imagens/camera.jpg')}
                          />
                        </View>
                      <View style={{ }}>
                        <TouchableOpacity onPress={this.selectPhoto.bind(this)}>
                          <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                                        justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2, marginTop:10}}
                            >
                            <Text style = {{color: 'black', fontWeight:'bold'}}>Select Photo</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.selectPhoto.bind(this)}>
                          <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                                        justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2, marginTop:10}}
                            >
                            <Text style = {{color: 'black', fontWeight:'bold'}}>Pick from gallery</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
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
                        <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
                                    justifyContent: 'center', borderRadius: 15, height:40, borderColor:'#37db9a', borderWidth:2}}
                        >
                        <Text style = {{color: 'black', fontWeight:'bold'}}>Criar conta</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{height:20}}>
                    </View>

                    <TouchableOpacity onPress = {this.clickVoltar}>
                        <View style = {{backgroundColor: '#FAFDFF', alignItems: 'center', 
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
        height: 40, 
        borderBottomColor:'#37db9a',
        borderBottomWidth: 2,
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
      viewChooseImage:{
        marginTop:30,
        marginBottom:20,
        //height: 100, 
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#FAFDFF',
        //flexDirection:'row',
      },
      viewButtons:{
        marginTop:50,
        height: 100, 
        width:'90%',
        paddingLeft:5,
        backgroundColor:'#FAFDFF'
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
        backgroundColor: '#FAFDFF',
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
      }
});
