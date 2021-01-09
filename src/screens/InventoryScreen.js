import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const InventoryScreen = ({cars}) => {
const randomCars = cars.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x);


  return (
    <SafeAreaView >
           <FlatList
            data={randomCars}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <ScrollView>   
                    <View style={styles.cardView}> 
                      <Text style={styles.boxStyle}>{item.make}</Text>
                   </View> 
               </ScrollView>   
            );
          }}
      />
    </SafeAreaView>
  );
};
            

    
const styles = StyleSheet.create({
   boxStyle: {
    alignSelf: 'center',   
    height: 160, 
    width: 320, 
    borderWidth: 1, 
    marginBottom: 5
   },
});
    
   
 


       
const mapStateToProps = store => {
    return {
        cars: store.cars.cars,
    };
 };
export default connect(mapStateToProps)(InventoryScreen);


 
