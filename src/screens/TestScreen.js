  import React, { useEffect } from 'react'
  import { View, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
  import { ListItem, Text, Avatar } from 'react-native-elements'
  import { connect } from 'react-redux';
  import { fetchCars } from '../actions/index'
  
  
  const TestScreen = ({ navigation, fetchCars, cars }) => {
  
      useEffect(() => {
          if(cars.length === 0){
          fetchCars()
      };
  }, []);
  
  const renderItem = ( item ) => (
     
      <ListItem bottomDivider>
          <Avatar source={{uri: item.img}} />
        <ListItem.Content>
          <ListItem.Title>{item.make}</ListItem.Title>
          <ListItem.Subtitle>{item.model}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )
  
  return (
       <>
         <Text>Welcome to Home screen</Text>
         <Button title="Go back" onPress={() => navigation.goBack()} />
         <FlatList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>  {
             return renderItem(item) }}
        />
       </>
     );
   };
  
   const styles = StyleSheet.create({
     item: {
       padding: 20,
       marginVertical: 8,
       marginHorizontal: 16,
       justifyContent: "center",
       alignItems: "center",
       
     },
     title: {
       fontSize: 32,

     },
});
  
  
  
   const mapStateToProps = carsReducer => {
       return {
        cars: carsReducer.cars.cars
       }
    };
       
    export default connect(mapStateToProps, { fetchCars })(TestScreen);


         


