import React, { Component,StatusBar } from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../Login';
import Cadastro from '../../Cadastro';
import DetalhesCardapio from '../../DetalhesCardapio';
import DetalhesDiaDoCardapio from '../../DetalhesDiaDoCardapio';
import PerfilDoUsuario from '../../PerfilDoUsuario';
import DetalhesRefeicao from '../../DetalhesRefeicao';
import SearchFood from '../../SearchFood';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="DetalhesCardapio" screenOptions={{ headerStyle: { backgroundColor: '#ccc' }, headerTintColor: '#0FB830' }}>
        <Stack.Screen options={{ headerLeft: null }} name="Login" component={Login} />
        <Stack.Screen name="SearchFood" options={{title: 'Pesquisar',headerStyle: { backgroundColor: 'white' }, headerTintColor: '#0FB830'}} component={SearchFood}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerLeft: null }} />
        <Stack.Screen name="DetalhesCardapio"   options={{title: 'Home',headerStyle: { backgroundColor: 'white' }, headerTintColor: '#0FB830'}} component={DetalhesCardapio} />
        <Stack.Screen name="DetalhesDiaDoCardapio" options={{title: 'Horários',headerStyle: { backgroundColor: 'white' }, headerTintColor: '#0FB830'}}  component={DetalhesDiaDoCardapio} />
        <Stack.Screen name="Perfil" options={{title: 'Seu perfil',headerStyle: { backgroundColor: 'white' }, headerTintColor: '#0FB830'}} component={PerfilDoUsuario} />
        <Stack.Screen name="DetalhesRefeicao" options={{title: 'Refeição',headerStyle: { backgroundColor: 'white' }, headerTintColor: '#0FB830'}} component={DetalhesRefeicao} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
