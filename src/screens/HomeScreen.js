import React from 'react'
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = ( { navigation } ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Home screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  };

  const mapStateToProps = carsReducer => {
      console.log(carsReducer)
    return {
     cars: ''
    }
 };

export default connect(mapStateToProps)(HomeScreen);