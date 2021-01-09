import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const InventoryCard = ({ car }) => {


  return (
    <View style={styles.cardStyle}> 
        <Image style={styles.img} source={{uri: item.img}}/>
    </View> 
  )
};
               

const styles = StyleSheet.create({
    cardStyle: {
        height: 200,
        borderWidth: 1, 
        backgroundColor: 'orange', 
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30
     },
     img: {
       height: 150,
       width: 240
     }
})
export default InventoryCard;