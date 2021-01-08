import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const CarInfoCard = ({car, dates}) => {
    const [totalCost, setTotalCost] = useState("");
    const [totalBookDays, setTotalBookDays] = useState("");

    const handleTotalCoast = (startDate, endDate) => {
        let daysInTime = endDate.getTime() - startDate.getTime();
        let totalDays = daysInTime / (1000 * 3600 * 24);
        let total = Math.ceil(totalDays) * car.rentPrice;
        setTotalCost(total);
        setTotalBookDays(Math.ceil(totalDays));
    };

    useEffect(() => {
        handleTotalCoast(dates.startDate, dates.endDate)
    }, [dates.startDate, dates.endDate]);


  return (
    <View style={styles.infoCard}>
      <Text style={styles.cardHeaderText}>
         <Text >{car.make}</Text>
            {"\n"}
         <Text>   {car.model}</Text>
      </Text>
     <Image style={styles.cardImage} source={{uri: car.img}} />
     <View style={styles.cardInfoTextView}> 
       <View style={styles.cardInfoText}>          
         <Text>{car.vehicleType}</Text>
         <Text><MaterialIcons name="reduce-capacity" size={16} color="black" />
              Capacity: {car.capacity}</Text>
         <Text><MaterialCommunityIcons name="bag-checked" size={16} color="black" />
              Bagging Capacity: {car.baggingCapacity}</Text>
         <Text><Ionicons name="pricetag" size={16} color="black" />
              Per-Day: ${car.rentPrice}.00</Text>
       </View> 
         <View>
             <Text><MaterialIcons name="date-range" size={16} color="black" />Selected Dates:</Text>
              <Text>Pick-Up: <Text style={{fontWeight: "bold"}}>  
                   {dates.startDate.toDateString()}
                    </Text></Text>
              <Text>Return:<Text style={{fontWeight: "bold"}}> 
                    {dates.startDate.toDateString()} 
                    </Text></Text>
                    <Text>Total Days: {totalBookDays} </Text>
            <Text>Estimated Total:</Text> 
            <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-end'}}>$ {totalCost}.00</Text>
         </View>
       </View>   
   </View>
               
  )
};

const styles = StyleSheet.create({
    infoCard: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    cardImage: {
      width: 300,
      borderRadius: 4,
      height: 200,
      marginBottom: 5
    },
    cardHeaderText: {
        alignSelf: 'center', 
        fontFamily: "Cochin", 
        fontSize: 25
    },
    cardInfoTextView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cardInfoText: {
        alignSelf: 'flex-start', 
        fontFamily: "Cochin", 
        fontSize: 18,
        marginLeft: 20 
    },
})
export default CarInfoCard;