import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AvailableCarsDetail from './AvailableCarsDetail';

const AvailableCarsList = ({ navigation, vehicles, title }) => {

  if (!vehicles.length) {
    return null;
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}> {title} </Text>
    <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={vehicles}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('CarDetail', {id: item.id})  
            }} >
            <AvailableCarsDetail result={item} />
          </TouchableOpacity>
        );
      }}
  />
</View>
)   
};
             

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
   marginBottom: 10
  },
});

export default AvailableCarsList;