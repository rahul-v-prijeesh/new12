import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Transaction from './screens/transaction';
import Search from './screens/search';
export default class App extends React.Component {
  render() {
    return (
     
        <AppContainer/>
      // <Text>you should return your books</Text>
    )
  }


}                    
const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: Transaction },
  Search: { screen: Search }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});