import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CarDetailScreen = ({ navigation, route }) => {
console.log(route.params)
  return <View style={styles.spacer}><Text>HELLO FROM THE SCREEN</Text></View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default CarDetailScreen;