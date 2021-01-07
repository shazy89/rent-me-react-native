import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
// import { getSearchDates } from '../actions/dates';
import { connect } from 'react-redux';

const AvailableCarsScreen = ({dates, cars}) => {
    const { startDate, endDate } = dates;
    

    const getSearchDates = (stDate, endDate ) => {
        let days = []
        const daysInTime = endDate.getTime() - stDate.getTime();
        const totalDays = daysInTime / (1000 * 3600 * 24);
        for (let i = 0; i < Math.ceil(totalDays); i++){
          let nextDay = new Date(stDate)
          nextDay.setDate(nextDay.getDate() + i)
          days = [...days, nextDay.toLocaleDateString()]
      }
      return days
   } 
  

     const compare = (arr1, arr2) => {
         const finalArray = []
         arr1.forEach(e1 => arr2.forEach(e2 =>
           {if (e1 === e2){
             finalArray.push(e1)
           } 
         } 
      ) )
           return finalArray
   }
         

   const d = getSearchDates(startDate, endDate)
   let bookings = cars.map(car => {
    return  car.bookings.filter(booking => {    
     return compare(getSearchDates(new Date(booking.startDate), new Date(booking.endDate)), d).length !== 0
    })     
 });  

 const carList = cars.filter(car => !bookings.flat().map(bkId => parseInt(bkId.car_id)).includes(car.id))

    return (
        <>
          <Text> Hello From the AvailableCarsScreen Screen</Text>
        </>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = store => {
         
    return {
       dates: store.dates,
       cars: store.cars.cars
    }
 };

export default connect(mapStateToProps)(AvailableCarsScreen);
    
           

