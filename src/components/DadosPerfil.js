import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class DadosPerfil extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      dataNascimento:'',
      altura:'',
      peso:'',
      pesoMeta:'',
        show:false
    }
    this.clickVoltar = this.clickVoltar.bind(this);
    this.clickCriarConta = this.clickCriarConta.bind(this);
    this.validarCamposPerfil = this.validarCamposPerfil.bind(this);
    this.onChangeData = this.onChangeData(this);
  }

  clickCriarConta(){
    if(this.validarCamposPerfil()){
      this.props._onClickCriarConta(this.state.nome, this.state.dataNascimento, this.state.altura, this.state.peso, this.state.pesoMeta);
    } 
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

                    <View style={styles.viewText}>
                        <Text style={styles.texto}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#ccc"
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
});
