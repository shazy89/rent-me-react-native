import React, { useEffect } from 'react'
import { View, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'react-native-elements'
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index'


const HomeScreen = ({ navigation, fetchCars, cars }) => {

    useEffect(() => {
        if(cars.length === 0){
        fetchCars()
    };
}, []);

return (
     <>
       <Text>Welcome to Home screen</Text>
       <Button title="Go back" onPress={() => navigation.goBack()} />
       <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.item}
              onPress={() =>
                console.log('HEY THERE')
              }
            >
              <Text style={styles.title}>{item.make}</Text>
            </TouchableOpacity>
          );
        }}
      />
     </>
   );
 };


 const styles = StyleSheet.create({

      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        
      },
      title: {
        fontSize: 32,

      },
 });

 const mapStateToProps = carsReducer => {
     return {
      cars: carsReducer.cars.cars
     }
  };
     
  export default connect(mapStateToProps, { fetchCars })(HomeScreen);


         


