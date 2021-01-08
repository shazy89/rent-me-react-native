import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const InventoryCard = ({car, dates}) => {


  return (
    <View style={styles.infoCard}>
   </View>
  )
};
               

const styles = StyleSheet.create({
    infoCard: {

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
        fontSize: 25
    },
    cardInfoTextView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cardInfoText: {
        alignSelf: 'flex-start', 
        fontFamily: "Cochin", 
        fontSize: 18,
        marginLeft: 20 
    },
})
export default InventoryCard;