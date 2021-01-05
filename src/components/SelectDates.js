import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from './DatePicker';
import useSelectDate from '../hooks/useSelectDate';
import { Ionicons } from '@expo/vector-icons';

const SelectDates = () => {
const [pickUpDate, returnDate, showReturn, 
       showPickUp, showReturnCalender, showPickUpCalender, 
       onChangePickUpDate, onChangeReturnDate, pickUpButton, returnButton ] = useSelectDate();

 return (
  <>
    <View style={styles.datePickerView}>
        <Button 
            buttonStyle={{
             backgroundColor: pickUpButton,     
             width: 100,
             marginLeft: 20,}} 
             onPress={showPickUpCalender}  
             title="Pick-Up" 
             />
        <Button 
            buttonStyle={{
             backgroundColor: returnButton,     
             width: 100,
             marginLeft: 20,}} 
             onPress={showReturnCalender}  
             title="Return" />
    </View>
                
    <View > 
       {showPickUp && (
         <DateTimePicker
         style={styles.datePicker}
         testID="dateTimePicker"
         value={pickUpDate}
         mode='date'
         is24Hour={true}
         display="spinner"
         minimumDate={new Date()}
         onChange={onChangePickUpDate}
         /> 
         )}
     {showReturn && (
       <DateTimePicker
         style={styles.datePicker}
         testID="dateTimePicker"
         value={returnDate}
         mode='date'
         is24Hour={true}
         minimumDate={pickUpDate}
         display="spinner"
         onChange={onChangeReturnDate}
       />
     )}
    </View>
  </>
 );
};
         
const styles = StyleSheet.create({
  datePickerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "center",
  },
  datePicker: {
    width: '100%',
    borderColor: 'black',
  },
  pickUpbuttonStyle: {
    width: 100,
    marginLeft: 20,

  },
  returnButtonStyle: {
    width: 100,
    marginLeft: 20,

  }
});
       


   

      

    






   
    
    
    
    




export default SelectDates