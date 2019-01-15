import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'


class Inputs extends Component {
   state = {
      name: '',
      email: '',
	  age: '',
	  phone: '',
	  gender: ''
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handleAge = (text) => {
      this.setState({ age: text })
   }
   handlePhone = (text) => {
      this.setState({ phone: text })
   }
   handleGender = (text) => {
      this.setState({ gender: text })
   }
   // login = (email, pass) => {
      // alert('email: ' + email + ' password: ' + pass)
   // }
   render() {
      return (
         <View style = {styles.container}>
		 <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email(@.edu)"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleAge}/>
			
			<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone#"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handlePhone}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Gender"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleGender}/>
			
            {/* <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Creds')}
               >
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity> */}
            <Button
					onPress={() => this.props.navigation.navigate('Prefs')}
					title="Submit"
					color="black"
               accessibilityLabel="Sign up for an account on our app."
               backgroundColor="blue"
					/>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 100
   },
   input: {
      paddingLeft: 20,
      margin: 15,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
	  borderRadius: 4,
	  color: 'black',
   },
   submitButton: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})