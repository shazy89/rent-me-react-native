import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const CarDetailScreen = ({ navigation, route, cars }) => {
    
 const car = cars.find(t => t.id === route.params.id);
 console.log(car)
  return (
          <View style={styles.cardContainer}>
             <Text style={styles.card}>
              
                 </Text>


             <Text style={styles.form}>{car.model}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 15,
   },
  card: {
      borderColor: 'red',
      borderWidth: 3,
      height: '50%'
  },
  form: {
   
     borderColor: 'red',
     borderWidth: 3,
     height: '40%'
  } 

    
    
});
const mapStateToProps = store => {
    return {
     cars: store.cars.cars
    }
 };

export default connect(mapStateToProps)(CarDetailScreen);