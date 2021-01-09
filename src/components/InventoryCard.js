import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ListItem, Text, Avatar } from 'react-native-elements'

const InventoryCard = ({ car }) => {
console.log(car)

  return (
    <View style={styles.cardContainer}> 
       <View style={styles.cardStyle}>
           <Image style={styles.img} source={{uri: car.img}}/>
      </View>
        <View style={styles.textContainer}>
            <View >
               <Text style={styles.textHeader}>{car.make}</Text>
               <Text style={styles.textHeader}>{car.model}</Text>
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
        marginRight: 10},
    textContainer: {},
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    cardStyle: {

     },
     imgView: {

     },
     img: {
       height: 150,
       width: 240
     }
});
export default InventoryCard;