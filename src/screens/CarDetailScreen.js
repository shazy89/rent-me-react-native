import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const CarDetailScreen = ({ navigation, route, cars }) => {
    
 const car = cars.find(t => t.id === route.params.id);
 console.log(car)
  return (
          <View style={styles.spacer}>
             <Text>{car.make}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});
const mapStateToProps = store => {
    return {
     cars: store.cars.cars
    }
 };

export default connect(mapStateToProps)(CarDetailScreen);