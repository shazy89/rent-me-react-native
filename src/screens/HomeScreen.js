import React, { useEffect } from 'react'
import { View, Button, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Text, Avatar, Image } from 'react-native-elements'
 // import { connect } from 'react-redux';
// import { fetchCars } from '../actions/index'


const HomeScreen = ({ navigation }) => {

return (
     <>
       <ImageBackground
          source={{ uri: 'https://res.cloudinary.com/dytheecsk/image/upload/v1609861676/img2_scqpqh.jpg' }}
          style={styles.backgroundImage}
          resizeMode='cover'
        />
        <View style={styles.heading}>
           <Text h2 style={styles.headingText}> Reserve A Vehicle</Text>
        </View>
     </>
   );
 };

            
 const styles = StyleSheet.create({
     backgroundImage: {
        width: '100%', 
        height: 300
     },
     heading: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d3d3d3',
        borderWidth: 1
     },
     headingText: {
        fontFamily: "Cochin" 
     }
 });
     
  



     
  export default HomeScreen;



