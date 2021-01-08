import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import SelectDates from '../components/SelectDates'
import useDates from '../hooks/useDates';

const HomeScreen = ({ navigation, dates }) => {
   const { startDate, endDate } = dates;
   const [ pkpDate, retDate ] = useDates(startDate, endDate);

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
           <View style={styles.selectedDatesView}>
            { startDate ? <Text style={styles.selectedDates}>{pkpDate}</Text> : null}
            { endDate ? <Text style={styles.selectedDates}>{retDate}</Text> : null}
           </View >
          <View> 
           {startDate && endDate ? (<Button
              title="Check Availability"
              buttonStyle={styles.availabilityButton}
              onPress={() => navigation.navigate('Availability')}
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
        selectedDatesView: {
           alignItems: 'center',
           flexDirection: 'row',
           justifyContent: "center",
        },
        selectedDates: {
           width: '40%',
           margin: 10,
           fontSize: 16,
           textAlign: 'center',
           backgroundColor: '#2E9298',
           borderRadius: 10,
           padding: 5,
           shadowColor: '#000000',
           shadowOffset: {
             width: 0,
             height: 3
           },
           shadowRadius: 5,
           shadowOpacity: 1.0
        }
     });
           
     const mapStateToProps = store => {
        return {
           dates: store.dates
        }
     };
       
  export default connect(mapStateToProps)(HomeScreen);
              
        
           

       
           


       

            
     
  



     



