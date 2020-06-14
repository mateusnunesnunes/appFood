import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, FlatList, TextInput, TouchableWithoutFeedback, ViewBase } from 'react-native';
import ImagemENomeUsuario from "./ImagemENomeUsuario";
import CelulaDetalhesDietaUsuario from "./CelulaDetalhesDietaUsuario";
import CelulaDetalhesMetasUsuario from "./CelulaDetalhesMetasUsuario";
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class RefeicaoNoite extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      imagem: "",
      titulo: "",
      text: '',
      selectedIndex: 0
    }
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {

    return (
      <View style={{ flex: 1,top:"2%" }}>
        <SegmentedControlTab
          tabsContainerStyle={{
            backgroundColor: "#52FFBA", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            }, shadowOpacity: 0.20, shadowRadius: 1.5, elevation: 2,
          }}
          tabStyle={{ backgroundColor: "#52FFBA", borderColor: "white" }}
          tabTextStyle={{ color: "black", fontSize: 16 }}
          activeTabTextStyle={{ color: "black", fontSize: 16 }}
          activeTabStyle={{ backgroundColor: "white" }}
          values={['Jantar']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        {this.state.selectedIndex === 0 &&
          <View style={{ width: "100%",height:"100%", backgroundColor: "white" }}>
          </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({


});
