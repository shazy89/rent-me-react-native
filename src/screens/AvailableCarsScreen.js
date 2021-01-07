import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import useAvailableCars from '../hooks/useAvailableCars';
import { connect } from 'react-redux';
import AvailableCarsList from '../components/AvailableCarsList';

const AvailableCarsScreen = ({dates, cars, navigation}) => {
    const { startDate, endDate } = dates;
    const [carList] = useAvailableCars(startDate, endDate, cars);
     
      const filterVehicleType = type => { 
          return carList.filter(car => car.vehicleType === type)
        };

    return (
        <>
           <ScrollView>
            <AvailableCarsList vehicles={filterVehicleType('Compact Car')} title='Compact Cars' />
            <AvailableCarsList vehicles={filterVehicleType('Suv')} title='Compact Cars' />
            <AvailableCarsList vehicles={filterVehicleType('Sports Car')} title='Compact Cars' />
          </ScrollView>
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


         





    
           

