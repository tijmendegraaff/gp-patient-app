import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
// Import Screens
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import HomeScreen from './screens/HomeScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    Register: RegisterScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
