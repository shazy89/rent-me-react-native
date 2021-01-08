import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const InventoryScreen = () => {

  return (
    <SafeAreaView >
     <ScrollView>
       <View  style={styles.container}>
           <Text>HEY</Text>
       </View>
     </ScrollView>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1
   }
});

export default InventoryScreen;