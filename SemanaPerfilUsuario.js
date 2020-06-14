import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase, Button } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class SemanaPerfilUsuario extends Component {

  constructor() {
    super();
    this.state = {
      labelAMostra: "Segunda-Feira"
    }
  }

  OnPressSegunda() {
    // this.setState((state) => {
    //   return {labelAMostra: "Segunda-Feira"}
    // });
  }
  OnPressTerca() {
    // this.setState((state) => {
    //   return {labelAMostra: "Terça-Feira"}
    // });
  }
  OnPressQuarta() {
    // this.setState((state) => {
    //   return {labelAMostra: "Quarta-Feira"}
    // });
  }
  OnPressQuinta() {
    // this.setState((state) => {
    //   return {labelAMostra: "Quinta-Feira"}
    // });
  }
  OnPressSexta() {
    // this.setState((state) => {
    //   return {labelAMostra: "Sexta-Feira"}
    // });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewInicial}>
        <Text style={{ top: 0, fontSize: 16 }}>Semana Fitness</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: "100%" }}>
          <View style={{ width: "50%", borderRightColor: "#52FFBA", borderRightWidth: 2 }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={this.OnPressSegunda()}>
              <Text style={styles.textDiadaSemana}>Segunda-Feira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={this.OnPressTerca()}>
              <Text style={styles.textDiadaSemana}>Terça-Feira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={this.OnPressQuarta()}>
              <Text style={styles.textDiadaSemana}>Quarta-Feira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={this.OnPressQuinta()}>
              <Text style={styles.textDiadaSemana}>Quinta-Feira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={this.OnPressSexta()}>
              <Text style={styles.textDiadaSemana}>Sexta-Feira</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "white", width: "50%" }}>
            {this.state.labelAMostra === "Segunda-Feira" &&
              <Text>Segundouuuuu</Text>
            }
            {this.state.labelAMostra === "Terça-Feira" &&
              <Text>Terçouuuuuuu</Text>
            }
            {this.state.labelAMostra === "Quarta-Feira" &&
              <Text>Quartouuuuuu</Text>
            }
            {this.state.labelAMostra === "Quinta-Feira" &&
              <Text>Quintouuuuuu</Text>
            }
            {this.state.labelAMostra === "Sexta-Feira" &&
              <Text>Sextouuuuuuu</Text>
            }
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textDiadaSemana: {
    fontSize: 16,
    top: "3%",
    color: "black",
  },
  viewInicial: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.5,
    elevation: 2,
    flexGrow: 1,
    width: '90%',
    height: 150,
    top: 110,
    left: 20,
    backgroundColor: 'white',
    position: "absolute",
    padding: 0
  }
});
