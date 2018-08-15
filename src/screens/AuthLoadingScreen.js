import React, { Component } from 'react';
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View,
} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkForUserToken = this.checkForUserToken.bind(this);
  }

  componentDidMount() {
    this.checkForUserToken();
  }

  async checkForUserToken() {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
