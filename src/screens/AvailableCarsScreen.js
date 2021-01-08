import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import useAvailableCars from '../hooks/useAvailableCars';
import { connect } from 'react-redux';
import AvailableCarsList from '../components/AvailableCarsList';
import Spacer from '../components/Spacer';

const AvailableCarsScreen = ({dates, cars, navigation}) => {
    const { startDate, endDate } = dates;
    const [carList] = useAvailableCars(startDate, endDate, cars);
     
      const filterVehicleType = type => { 
          return carList.filter(car => car.vehicleType === type)
        };
   // console.log(carList)   
    return (
        <>
           <ScrollView>
             <Spacer>  
                <AvailableCarsList vehicles={filterVehicleType('Compact Car')} navigation={navigation} title='Compact Cars' />
             </Spacer>
             <Spacer>
               <AvailableCarsList vehicles={filterVehicleType('Suv')} navigation={navigation} title='Suv' />
             </Spacer>
             <Spacer>
                <AvailableCarsList vehicles={filterVehicleType('Luxury Car')} navigation={navigation} title='Sports Car' />
             </Spacer>  
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


         





    
           

