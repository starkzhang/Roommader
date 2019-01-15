import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class PersonalInfo extends React.Component {
  constructor() {
     super();
     this.state = { screenWidth: Dimensions.get("window").width }; 
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.tempNav}>
        
        </View>
        <Image 
            style = {{ width: this.state.screenWidth, height: 400 }}
            source = {require('../assets/images/portrait.png')}
        />
        <View style = {{flex: 1, alignItems: 'center', paddingTop: 20 }}>
            <Text>Dan        Age: 25</Text>
        </View>
        <View style = {{ paddingBottom: 20 }}>
            <Text>Price Range: $800-$1200</Text>
            <Text>Sleeping hours: 11pm-12pm</Text>
            <Text>Drugs: Yes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tempNav: {
    width: 100 + "%",
    height: 50,
    marginTop: 20,
    backgroundColor: '#c3c3c3',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
