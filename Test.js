import React from 'react'
import { View, Text, Button } from 'react-native';

const Test = ( { navigation } ) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello Test Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  };

export default Test;