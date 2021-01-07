import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
// import { getSearchDates } from '../actions/dates';
import { connect } from 'react-redux';

const AvailableCarsScreen = ({dates, cars}) => {
    const { startDate, endDate } = dates;
    

    const getSearchDates = (stDate, endDate ) => {
        let days = []
        let daysInTime = endDate.getTime() - stDate.getTime();
        let totalDays = daysInTime / (1000 * 3600 * 24);
        for (let i = 0; i < Math.ceil(totalDays); i++){
          let nextDay = new Date(stDate)
          nextDay.setDate(nextDay.getDate() + i)
  
            days = [...days, nextDay.toLocaleDateString()]
        }
        return days
     } 


//console.log(date === dt2)
// console.log(date.valueOf() == dt2.valueOf())

const d = getSearchDates(startDate, endDate)
//console.log(d.includes('2/8/2021'))
//console.log(d)
const lincoln = cars.find(car => car.make === 'Lincoln').bookings.filter(booking => {
    let dates = getSearchDates(new Date(booking.startDate), new Date(booking.endDate))
   console.log(dates)
      // return d.includes(dt1)
   })

console.log(lincoln)


const available = cars.map(car => car.bookings.filter(booking => {
 //   console.log(booking.startDate)
    let date = new Date('2021-01-10T05:00:00.000Z').getTime()
  //  console.log(date)
    let dt1 = new Date(booking.startDate).getTime()
  //  console.log(d)
  //  console.log(dt1)
    return !d.includes(dt1)
   })
 );
//console.log(available)

  // e1.getTime() === e2.getTime()

    
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
    
           

