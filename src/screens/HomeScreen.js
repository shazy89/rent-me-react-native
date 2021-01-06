import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Text, Avatar, Image, Button } from 'react-native-elements';
import SelectDates from '../components/SelectDates'
import { connect } from 'react-redux';
// import { fetchCars } from '../actions/index'


const HomeScreen = ({ navigation, dates }) => {
  
   const { startDate, endDate } = dates;

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
           <View  style={styles.datesView}>
              <SelectDates />
           </View>
          <View> 
           {startDate && endDate ? (<Button
              title="Check Availability"
              buttonStyle={styles.availabilityButton}
              />) :
              (<Button
              disabled
              title="Check Availability"
              buttonStyle={styles.availabilityButton}
              />)}
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
        backgroundColor: '#ffa500',
        borderWidth: 1,
     },
    headingText: {
       fontFamily: "Cochin" 
    },
    datesView: {
       flex: 1,
       margin: 20,
      },
      availabilityButton: {
       backgroundColor: '#00A800',
      },

    });
       
           
    const mapStateToProps = carsReducer => {
       return {
          dates: carsReducer.dates
       }
    };
      
export default connect(mapStateToProps)(HomeScreen);


       

            
     
  



     



