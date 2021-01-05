import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from './DatePicker';
import useSelectDate from '../hooks/useSelectDate';

const SelectDates = () => {
const [pickUpDate, returnDate, showReturn, 
       showPickUp, showReturnCalender, showPickUpCalender, 
       onChangePickUpDate, onChangeReturnDate ] = useSelectDate();
 return (
  <>
    <View >
        <Button onPress={showPickUpCalender} title="Pick-Up" />
        <Button onPress={showReturnCalender} title="Return" />
    </View>
    <View style={styles.datePickerView}> 
       {showPickUp && (
         <DateTimePicker
         style={styles.datePicker}
         testID="dateTimePicker"
         value={pickUpDate}
         mode={'date'}
         is24Hour={true}
         display="default"
         minimumDate={new Date()}
         onChange={onChangePickUpDate}
       />
     )}
     {showReturn && (
       <DateTimePicker
         style={styles.datePicker}
         testID="dateTimePicker"
         value={returnDate}
         mode={'date'}
         is24Hour={true}
         minimumDate={pickUpDate}
         display="default"
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
    width:  120,
    borderColor: 'black',
    borderBottomColor: 'red'
    },

})
      

    






   
    
    
    
    




export default SelectDates