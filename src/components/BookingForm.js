import React, {useState} from 'react';
import { View,StyleSheet } from 'react-native';
import {  Text, Input, Button } from 'react-native-elements';
const BookingForm = ({carId}) => {

    const  handleSubmit = (e) => {
        e.preventDefault();
        const bookInfo = {
            booking: {startDate, endDate, firstName, lastName, phoneNumber, emailAdress, car_id }
        }
        bookCar(bookInfo, history)
    }
  return (
    <View >
       <Input
         placeholder='First Name'
        
         onChangeText={() => {}}
       />
       <Input
         placeholder='Last Name'
         onChangeText={() => {}}
       />
    <Input
      style={styles.input}
      placeholder='Phone Number'
      onChangeText={() => {}}
    />
    <Input
      style={styles.input}
      placeholder='rentMe@email.com'
      onChangeText={() => {}}
    />
    <Button title="Submit" buttonStyle={styles.submitButton} onPress={() => console.log('submit')} />
  </View>
  );
};

const styles = StyleSheet.create({
    nameView: {
        flexDirection: 'row',
    },
   submitButton: {
    backgroundColor: '#00A800',
   }
});

export default BookingForm;

        
       
    

