import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const CarInfoCard = () => {
  return (
      <>
      </>
  )
};

const styles = StyleSheet.create({
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
        fontSize: 25
    },
    cardInfoText: {
        alignSelf: 'flex-start', 
        fontFamily: "Cochin", 
        fontSize: 18,
        marginLeft: 20 
    },
})
export default CarInfoCard;