import React, { Component,StatusBar } from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../Login';
import Cadastro from '../../Cadastro';
import SearchFood from '../components/SearchFood';
import DetalhesCardapio from '../../DetalhesCardapio';
import DetalhesDiaDoCardapio from '../../DetalhesDiaDoCardapio';
import PerfilDoUsuario from '../../PerfilDoUsuario';
import DetalhesRefeicao from '../../DetalhesRefeicao';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Perfil" screenOptions={{headerShown: false, headerStyle: { backgroundColor: '#ccc' }, headerTintColor: '#FFF' }}>
        <Stack.Screen options={{ headerLeft: null }} name="Login" component={Login} />
        <Stack.Screen options={{ headerLeft: null }} name="SearchFood" component={SearchFood}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerLeft: null }} />
        <Stack.Screen name="DetalhesCardapio" component={DetalhesCardapio} />
        <Stack.Screen name="DetalhesDiaDoCardapio"  component={DetalhesDiaDoCardapio} />
        <Stack.Screen name="Perfil"  component={PerfilDoUsuario} />
        <Stack.Screen name="DetalhesRefeicao"  component={DetalhesRefeicao} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
