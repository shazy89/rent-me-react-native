import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import useSelectDate from '../hooks/useSelectDate';
import { connect } from 'react-redux';
import { addPickUpDate, addReturnDate } from '../actions/dates'
import { fetchCars } from '../actions/index'

const SelectDates = ({ addPickUpDate, addReturnDate, fetchCars, cars }) => {

const [pickUpDate, returnDate, showReturn, 
       showPickUp, showReturnCalender, showPickUpCalender, 
       onChangePickUpDate, onChangeReturnDate, pickUpButton, returnButton,
        ] = useSelectDate(addPickUpDate, addReturnDate);

       useEffect(() => {
        if(cars.length === 0){
        fetchCars()
       };
     }, []);
 
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
 });
 const mapStateToProps = carsReducer => {
  return {
   cars: carsReducer.cars.cars
  }
};
        
   export default connect(mapStateToProps, { addPickUpDate, addReturnDate, fetchCars })(SelectDates);
                
         


   

      

    






   
    
    
    
    



