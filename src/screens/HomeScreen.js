import React from 'react'
import { View, Text, Button } from 'react-native';

const HomeScreen = ( { navigation } ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Home screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  };

export default HomeScreen;