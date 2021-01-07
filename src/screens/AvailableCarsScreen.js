import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import useAvailableCars from '../hooks/useAvailableCars'
import { connect } from 'react-redux';

const AvailableCarsScreen = ({dates, cars}) => {
    const { startDate, endDate } = dates;
    const [carList] = useAvailableCars(startDate, endDate, cars);

    const filterVehicleType = type => {
        return carList.filtter(car => car.vehicleType === type)
    };

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


         





    
           

