import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, ViewBase } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DetalhesCelula extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantidadeKcal: "",
      diaDoMes: '',
      mes: ""
    }
  }

  render() {
    return (
      <View style={styles.viewCelula}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ width: "100%", height: 45, backgroundColor: "white" }}>
            <View style={styles.viewColorida}>
              <View style={{ backgroundColor: "#52FFBA", alignItems: "center", flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.diaDoMes}>{this.props.diaDoMes}</Text>
                <Text style={styles.mes}>{this.props.mes}</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", height: 45, backgroundColor: "white",flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{width:"85%"}}>
              <Text style={styles.quantidadeKcal}>{this.props.quantidadeKcal + " Kcal consumidas"}</Text>
            </View>
            <View style={{width:"15%"}}>
              <Text style={{position:"relative" }}>
                <Icon
                  name="plus"
                  color="#52FFBA"
                  size={45}
                />
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  quantidadeKcal: {
    fontSize: 14,
    color: "black",
    left: 25,
    top:12
  },
  viewCelula: {
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
    height: 93,
    top: 10,
    left: 20,
    backgroundColor: 'white',
    position:"absolute"
  },
  diaDoMes: {
    fontSize: 30,
    color: "black",
    paddingLeft: 18
  },
  mes: {
    fontSize: 25,
    color: "black",
    paddingLeft: 15
  },
  viewColorida: {
    padding: 0,
    width: "100%",
    height: "8%",
    backgroundColor: '#52FFBA',
    marginBottom: 20
  }

});
