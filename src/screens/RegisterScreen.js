import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>SignIn</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        >
          <View>
            <Text>SignIn</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterScreen;
