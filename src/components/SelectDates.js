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
       onChangePickUpDate, onChangeReturnDate ] = useSelectDate();
     
 return (
  <>
    <View style={styles.datePickerView}>
        <Button buttonStyle={styles.pickUpbutton} 
                onPress={showPickUpCalender}  
                title="Pick-Up" 
                />
        <Button buttonStyle={styles.returnButton} onPress={showReturnCalender}  title="Return" />
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
  pickUpbutton: {
    width: 100,
    marginLeft: 20,
    backgroundColor: 'red'
  },
  returnButton: {
    width: 100,
    marginLeft: 20,
    backgroundColor: 'red'
  }
});
       


   

      

    






   
    
    
    
    




export default SelectDates