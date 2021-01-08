import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import CarInfoCard from '../components/CarInfoCard'
const CarDetailScreen = ({ navigation, route, cars }) => {
    
 const car = cars.find(t => t.id === route.params.id);

  return (
          <View style={styles.cardContainer}>
              <CarInfoCard car={car}/>
             <Text style={styles.formCard}>{car.model}</Text>
          </View>
  )
};
                   
const styles = StyleSheet.create({
  cardContainer: {
      flexDirection: 'column',
    
    },
    formCard: {
        borderColor: 'red',
        borderWidth: 3,
      } 
   });
                 
   const mapStateToProps = store => {
       return {
        cars: store.cars.cars
       }
    };
   
   export default connect(mapStateToProps)(CarDetailScreen);
                 



  

      
  
  
        



   

   

    
    