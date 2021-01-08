import React, {useState} from 'react';
import { View,StyleSheet } from 'react-native';
import {  Text, Input, Button } from 'react-native-elements';
const BookingForm = ({carId, dates}) => {
    const  { startDate, endDate } = dates;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
console.log(firstName)

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
         value={firstName}
         onChangeText={setFirstName}
       />
       <Input
         placeholder='Last Name'
         value={lastName}
         onChangeText={setLastName}
       />
    <Input
      style={styles.input}
      placeholder='Phone Number'
      value={phoneNumber}
      onChangeText={setPhoneNumber}
    />
    <Input
      style={styles.input}
      value={emailAdress}
      placeholder='rentMe@email.com'
      onChangeText={setEmailAdress}
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

        
       
    

