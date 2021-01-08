import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import CarInfoCard from '../components/CarInfoCard';
import BookingForm from '../components/BookingForm'
const CarDetailScreen = ({ navigation, route, cars, dates }) => {
    
 const car = cars.find(t => t.id === route.params.id);

  return (
          <View style={styles.cardContainer}>
              <CarInfoCard car={car} dates={dates}/>
             <Text style={styles.formCard}>* Required to complete your reservation</Text>
              <BookingForm carId={car.id} dates={dates} navigation={navigation}/>
          </View>
  );
};

                   
const styles = StyleSheet.create({
  cardContainer: {
      flexDirection: 'column',
    },
    formCard: {
        borderColor: 'red',
        borderWidth: 1,
      } 
   });
                 
   const mapStateToProps = store => {
       return {
        cars: store.cars.cars,
        dates: store.dates
       }
    };
   
   export default connect(mapStateToProps)(CarDetailScreen);
    
       
                 



  

      
  
  
        



   

   

    
    