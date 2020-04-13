import React, { Component } from 'react';
import {
  View,
} from 'react-native';

//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../Login';
import Cadastro from '../../Cadastro';

const Stack = createStackNavigator();

export default function Routes() {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor:'#ccc'}, headerTintColor:'#FFF' }}>
        <Stack.Screen
            
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
      );
};
