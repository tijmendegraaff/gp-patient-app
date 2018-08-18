import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text>Login Screen</Text>
        <Text>email</Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(input) => {
            this.setState({ email: input });
          }}
        />
        <Text>password</Text>
        <TextInput
          value={password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(input) => {
            this.setState({ password: input });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log(this.state);
          }}
        >
          <View>
            <Text>Send</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        >
          <View>
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignInScreen;
