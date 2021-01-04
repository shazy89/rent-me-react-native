import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {connect} from 'react-redux';
import { fetchCars } from '../actions/index'


const HomeScreen = ({ navigation, fetchCars, cars }) => {

    useEffect(() => {
        if(cars.length === 0){
        fetchCars()
    };
}, []);
      

  //  console.log(cars[1])
return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Welcome to Home screen</Text>
       <Button title="Go back" onPress={() => navigation.goBack()} />
     </View>
   );
 };

 const styles = StyleSheet.create({

 });

 const mapStateToProps = carsReducer => {
     return {
      cars: carsReducer.cars.cars
     }
  };
     
  export default connect(mapStateToProps, { fetchCars })(HomeScreen);
         
 


