import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Success from "./screens/Success";
import Submit from "./screens/Submit";
import Dashboard from "./screens/Dashboard";
import User from "./screens/User";
import Category from "./screens/Category";
import Novels from "./screens/Novels";
import Translations from "./screens/Translations";
import Historical from "./screens/Historical";
import Comic from "./screens/Comic";
import Poetry from "./screens/Poetry";
import All from "./screens/All";
import Search from "./screens/Search";




const stack = createStackNavigator();

function App() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
      <stack.Screen name="Success" component={Success}/>
      <stack.Screen name="Submit" component={Submit}/>
      <stack.Screen name="Dashboard" component={Dashboard}/>
      <stack.Screen name="User" component={User}/>
      <stack.Screen name="Category" component={Category}/>
      <stack.Screen name="Novels" component={Novels}/>
      <stack.Screen name="Translations" component={Translations}/>
      <stack.Screen name="Historical" component={Historical}/> 
      <stack.Screen name="Comic" component={Comic}/>
      <stack.Screen name="Poetry" component={Poetry}/>
      <stack.Screen name="All" component={All}/>
      <stack.Screen name="Search" component={Search}/>
      
      
      
    </stack.Navigator>


  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
