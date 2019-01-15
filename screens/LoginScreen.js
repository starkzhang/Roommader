//Source code adapted from:
//https://github.com/dwicao/react-native-login-screen
//Button from https://facebook.github.io/react-native/docs/button

import React, {Component} from 'react';
import { Button, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Wallpaper from '../components/Wallpaper';


export default class LoginScreen extends React.Component {
	
  onLoginPress() {
	  /* TODO: login to existing acct. */
  }
  
  render() {
    return (
			<React.Fragment>
        <Logo/>
				<View style={styles.buttonContainers}>
					<Button
					// onPress={onLoginPress}
					title="Log In"
					color="black"
					accessibilityLabel="If you already have an account, log in here!"
					/>
					<Button
					onPress={() => this.props.navigation.navigate('Creds')}
					title="Sign Up"
					color="black"
					accessibilityLabel="Sign up for an account on our app."
					/>
				</View>
			</React.Fragment>
      
    );
  }
}

const styles = StyleSheet.create({
	buttonContainers: {
		marginBottom: '10%',
	},
	buttons: {
		color: 'black',
	}
});
