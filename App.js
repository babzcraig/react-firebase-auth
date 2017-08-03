import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common'
import firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCUhxgDl3WP-40PXpXyupcCow5wBIt70iY",
      authDomain: "react-native-auth-ee850.firebaseapp.com",
      databaseURL: "https://react-native-auth-ee850.firebaseio.com",
      projectId: "react-native-auth-ee850",
      storageBucket: "react-native-auth-ee850.appspot.com",
      messagingSenderId: "551640282962"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Rest of app</Text>
      </View>
    );
  }
}
