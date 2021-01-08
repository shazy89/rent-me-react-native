import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const InventoryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <View style={{ flex: 1  }} >
          <Text>HEY</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default InventoryScreen;