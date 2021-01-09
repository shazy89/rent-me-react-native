
import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";


const AvailableCarsDetail = ({result}) => {

   return (
       <View style={styles.container}> 
             <Image style={styles.img} source={{uri: result.img}} />
            <Text style={styles.textContainer}>
             <Text style={styles.titleText}>{result.make} 
               {"\n"}
             </Text>
             <Text style={styles.titleText}> {result.model}
               {"\n"}
             </Text>
             <Text style={styles.priceText}> ${result.rentPrice}
               {"\n"}
             </Text>
         </Text>   
       </View>
   );
};
            
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        borderRadius: 4,
        borderBottomColor: 'black',
        width: 340,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
      img: {
          width: 200,
          borderRadius: 4,
          height: 120,
          marginBottom: 5
        },
        textContainer: {
          fontFamily: "Cochin",
          justifyContent: 'center'
        },
        titleText: {
          fontSize: 16,
          fontWeight: "bold"
        },
        priceText: {
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'stretch'
        }
  })
     

export default AvailableCarsDetail;
     

        
            
  

    
      
