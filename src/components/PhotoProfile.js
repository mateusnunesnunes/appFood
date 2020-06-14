import React, { Component } from "react";
import { Text, TouchableHighlight, View, StyleSheet, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


class PhotoProfile extends Component {

  state = {
    image: null,
  };

  registerForImagePermission = async() => {
    //Check for existing Permissions
    const {status} = await Permissions.getAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);
    let finalStatus = status;

    //If no existing permission, ask user for Permissions
    if(status != 'granted') {
      const {status} = Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);
      finalStatus = status;
    }

    //if no permission , exit the function
    if(finalStatus != 'granted'){return;}
  }

  componentWillMount() {
    this.registerForImagePermission();
  }



render() {
let { image } = this.state;

    return (



          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>


            {image && 
            <TouchableHighlight onPress={() => { this.RBSheet.open() }}>
              <View>
                <Icon
                  raised
                  name='pencil'
                  type='font-awesome'
                  color='#38DA38'
                  containerStyle={{ marginTop: -8, marginLeft: -20 }}
                  size={20}
                />
              <Image source={{ uri: image }} style={styles.profile_picture} onPress={() => { this.RBSheet.open() }}/>
              </View>
            </TouchableHighlight>
            }


            {!image && 
            <TouchableHighlight style={styles.ButtonPhotoBlue} onPress={() => { this.RBSheet.open() }}>
              <View>
                <Icon
                  raised
                  name='camera'
                  type='font-awesome'
                  color='#38DA38'
                  containerStyle={{ marginTop: -8, marginLeft: -10 }}
                />
                <Text style={styles.ButtonPhotoText}> Adicionar imagem </Text>
              </View>
            </TouchableHighlight>
            }



            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={230}
              // duration={250}
              customStyles={{
                container: {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }}
            >

              <LinearGradient colors={['#fff', '#fff']} style={styles.listContainer}>
                  <Text style={styles.text_title}>Selecionar uma foto</Text>
                  <Button title="Tirar foto" buttonStyle={styles.button_action} titleStyle={{fontSize: 22,color:'#37db9a'}} onPress={this._pickImage}/>
                  <Button title="Escolher da biblioteca" buttonStyle={styles.button_action} titleStyle={{fontSize: 22,color:'#37db9a'}}  onPress={this._pickLibrary}/>
                  <Button title="Cancelar" type="outline" buttonStyle={styles.button_action}  titleStyle={{fontSize: 22,color:'#37db9a'}} onPress={() => this.RBSheet.close()}/>
              </LinearGradient>
            </RBSheet>
          </View>
    );
  }

  


  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    this.RBSheet.close();
    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    this.props.SendProfilePictureURL(result );
  };

  _pickLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    this.RBSheet.close();
    // console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    // Enviando a URL da imagem para o parent 
    this.props.SendProfilePictureURL(result );


  };


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  listContainer: {
    flex: 10,
    width: '100%',
    padding: 25,
    paddingTop: 11,
    borderWidth:2,
    borderColor:'white'
    
  },
  text_title: {
    color: '#37db9a',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  button_action: {
    width: '100%',
    borderWidth:2,
    borderColor:'#37db9a',
    borderRadius: 6,
    marginBottom:7,
    marginTop:7,
    backgroundColor:'white'
  },  
  ButtonPhotoBlue: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#37db9a',
    borderRadius: 30,
    height: 52,
    marginBottom: 0,
    marginTop: 30
  },
  ButtonPhotoText: {
    color: '#37db9a',
    fontWeight:'bold',
    fontSize: 18,
    marginTop: -42,
    marginLeft: 55,
    textShadowColor: '#00FFF',
    textShadowRadius: 7,
    
  },
  profile_picture: {
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 110/ 2,
    width: 110, 
    height: 110,
    marginTop: -50,
    zIndex: -1
  }
})

export default PhotoProfile;