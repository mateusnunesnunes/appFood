import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../Login';
import Cadastro from '../../Cadastro';
import SearchFood from '../components/SearchFood';

const Stack = createStackNavigator();

export default function Routes() {
    return (
      <Stack.Navigator initialRouteName="SearchFood" screenOptions={{ headerStyle: {backgroundColor:'#ccc'}, headerTintColor:'#FFF' } }>
        <Stack.Screen
        options={{headerLeft: null}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
        options={{headerLeft: null}}
          name="SearchFood"
          component={SearchFood}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerLeft: null}} />
      </Stack.Navigator>
      );
};
