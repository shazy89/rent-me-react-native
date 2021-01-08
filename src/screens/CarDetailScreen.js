import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';

const CarDetailScreen = ({ navigation, route, cars }) => {
    
 const car = cars.find(t => t.id === route.params.id);
 console.log(car)
  return (
          <View style={styles.cardContainer}>
          
             <View style={styles.infoCard}>
                 <Text style={styles.cardHeaderText}>
                    <Text >{car.make}</Text>
                       {"\n"}
                    <Text>   {car.model}</Text>
                 </Text>
                 <Image style={styles.cardImage} source={{uri: car.img}} />
                <View style={styles.cardInfoText}>          
                   <Text>{car.vehicleType}</Text>
                   <Text>Capacity: {car.capacity}</Text>
                   <Text>Bags: {car.baggingCapacity}</Text>
                   <Text>Per-Day: ${car.rentPrice}</Text>
                   
                 </View>    
             </View>
             <Text style={styles.formCard}>{car.model}</Text>
          </View>
  )
};
                 
                 



const styles = StyleSheet.create({
  cardContainer: {
      flexDirection: 'column',
    
    },
    infoCard: {
        borderColor: 'red',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    cardImage: {
      width: 300,
      borderRadius: 4,
      height: 200,
      marginBottom: 5
    },
    cardHeaderText: {
        alignSelf: 'center', 
        fontFamily: "Cochin", 
        fontSize: 18
    },
    cardInfoText: {
        alignSelf: 'flex-start', 
        fontFamily: "Cochin", 
        fontSize: 18,
        marginLeft: 20 
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