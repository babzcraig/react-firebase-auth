import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { MyButton, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password} = this.state;

    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      email: '',
      password: '',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed!', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={"small"} />
    } else {
      return <MyButton onPress={this.onButtonPress.bind(this)}>Log in</MyButton>
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={"Email"}
            placeholder={"Enter Email"}
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={"Password"}
            placeholder={"Enter Password"}
            value={this.state.password}
            onChangeText={password => this.setState({ password })} />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
