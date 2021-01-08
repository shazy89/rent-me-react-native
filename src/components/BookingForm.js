import React, {useState} from 'react';
import { View,StyleSheet } from 'react-native';
import {  Text, Input, Button } from 'react-native-elements';

const BookingForm = ({carId, dates, navigation}) => {
    const  { startDate, endDate } = dates;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
console.log(navigation)

    const  handleSubmit = (e) => {
        e.preventDefault();
        const bookInfo = {
            booking: {startDate, endDate, firstName, lastName, phoneNumber, emailAdress, car_id: carId }
        }
        console.log(bookInfo)
        //bookCar(bookInfo, history)
    }
  return (
    <View >
       <Input
         placeholder='First Name'
         value={firstName}
         onChangeText={setFirstName}
       />
       <Input
         placeholder='Last Name'
         value={lastName}
         onChangeText={setLastName}
       />
    <Input
      placeholder='Phone Number'
      value={phoneNumber}
      onChangeText={setPhoneNumber}
    />
      
    <Input
      value={emailAdress}
      placeholder='rentMe@email.com'
      onChangeText={setEmailAdress}
    />
    { firstName && lastName && phoneNumber && emailAdress ?
    (<Button title="Submit" buttonStyle={styles.submitButton} onPress={handleSubmit} />) : 
    ((<Button title="Submit" buttonStyle={styles.submitButton} disabled  />))}
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

        
       
    

