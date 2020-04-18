import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesCardapio from './DetalhesCardapio';
import DetalhesDiaDoCardapio from './DetalhesDiaDoCardapio';


const Stack = createStackNavigator();

export default function Routes() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetalhesCardapio">
        <Stack.Screen name="DetalhesCardapio" options={{ title: 'Detalhes do Cardápio',headerStyle:{backgroundColor:"#52FFBA"},headerTintColor:"black"}} component={DetalhesCardapio} />
        <Stack.Screen name="DetalhesDiaDoCardapio" options={{ title: 'Dias da Semana do Cardápio',headerStyle:{backgroundColor:"#52FFBA"},headerTintColor:"black"}}  component={DetalhesDiaDoCardapio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}