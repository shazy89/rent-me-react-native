import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
// import { getSearchDates } from '../actions/dates';
import { connect } from 'react-redux';

const AvailableCarsScreen = ({dates}) => {
    const { startDate, endDate } = dates;

   const getSearchDates = (stDate, endDate ) => {
       let days = []
       const daysInTime = endDate.getTime() - stDate.getTime();
    
       const totalDays = daysInTime / (1000 * 3600 * 24);
       for (let i = 0; i < Math.ceil(totalDays); i++){
         let nextDay = stDate
         nextDay.setDate(nextDay.getDate() + i)
         days = [...days, nextDay]
        }
    
        return days
     } 
           

     const d = getSearchDates(startDate, endDate)
     console.log(d)
    return (
        <>
          <Text> Hello From the AvailableCarsScreen Screen</Text>
        </>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = carsReducer => {
    return {
       dates: carsReducer.dates
    }
 };

export default connect(mapStateToProps)(AvailableCarsScreen);