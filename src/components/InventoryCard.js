import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {  Text } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const InventoryCard = ({ car }) => {

  return (
    <View style={styles.cardContainer}> 
       <View style={styles.cardStyle}>
           <Image style={styles.img} source={{uri: car.img}}/>
      </View>
        <View style={styles.textContainer}>
            <View >
               <Text style={styles.textHeader}>{car.make}</Text>
               <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 15 }}>{car.model}</Text>
            </View>
            <View>
                <Text>{car.vehicleType}</Text>
                <Text style={styles.textContent}>
                      <FontAwesome name="users" size={16} color="black" />
                   {car.capacity} people</Text>
                <Text style={styles.textContent}>
                      <MaterialCommunityIcons name="bag-checked" size={16} color="black" />
                   {car.baggingCapacity} Bags</Text>
            </View>
            <View style={styles.priceView}>
                <Text >Pay Later</Text>
                <Text style={styles.priceText}>$ {car.rentPrice}.00</Text>
            </View>
        </View>
    </View> 
  );
};
             
const styles = StyleSheet.create({
    cardContainer: { 
        flexDirection: 'row',
        borderRadius: 4,      
        height: 180,
        borderWidth: 1, 
        backgroundColor: '#D6D6D6', 
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1.0
    },
    textContent: {
        fontSize: 14,
        alignSelf: 'center'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    priceView: {
      marginLeft: 30,
      borderColor: 'red'
    },
    priceText: {
        fontSize: 18,
        fontWeight: '600'
     },
     img: {
       height: 150,
       width: 240
     }
});
               

export default InventoryCard;