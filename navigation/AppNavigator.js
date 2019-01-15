import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import Credentials from '../screens/Credentials';
import Preferences from '../screens/Preferences';


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: LoginScreen,
  Creds: Credentials,
  Prefs: Preferences,
  AppContents: MainTabNavigator,
}));