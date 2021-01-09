import React from 'react';
import { View, StyleSheet, ScrollView, FlatList} from 'react-native';
import { Text, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const InventoryScreen = ({cars}) => {

const randomCars = cars.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x);

return (
    <SafeAreaView >
        <View style={styles.viewStyle}>
         <FlatList
          showsVerticalScrollIndicator ={false}
        
          data={randomCars}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
                <ScrollView           >   

               </ScrollView> 
          );
        }}
        />
    </View> 
  </SafeAreaView>
 );
};
  
const styles = StyleSheet.create({
    viewStyle: {
     alignSelf: 'stretch'
    },

     
 });

   

            

    

      

   
        
    
   
 


       
const mapStateToProps = store => {
    return {
        cars: store.cars.cars,
    };
 };
export default connect(mapStateToProps)(InventoryScreen);


 
