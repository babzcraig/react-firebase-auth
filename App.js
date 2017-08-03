import React from 'react';
import { View } from 'react-native';
import { Header, MyButton, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

export default class App extends React.Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCUhxgDl3WP-40PXpXyupcCow5wBIt70iY",
      authDomain: "react-native-auth-ee850.firebaseapp.com",
      databaseURL: "https://react-native-auth-ee850.firebaseio.com",
      projectId: "react-native-auth-ee850",
      storageBucket: "react-native-auth-ee850.appspot.com",
      messagingSenderId: "551640282962"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogoutPressed() {
    firebase.auth().signOut()
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <MyButton onPress={this.onLogoutPressed.bind(this)}>Log Out</MyButton>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={"large"} />
    }
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        {this.renderContent()}
      </View>
    );
  }
}
