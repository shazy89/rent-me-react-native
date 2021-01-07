
import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";


const AvailableCarsDetail = ({result}) => {

   return (
       <View style={styles.container}> 
             <Image style={styles.img} source={{uri: result.img}} />
             <Text style={styles.name}>{result.make}</Text>
       </View>
   );
};
  

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    img: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
      },
      name: {
          fontWeight: 'bold',
          
      }
})

export default AvailableCarsDetail;
    
      
