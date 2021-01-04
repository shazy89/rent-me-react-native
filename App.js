import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Test';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './src/reducers/index';
import thunk from 'redux-thunk';


const Stack = createStackNavigator();



let store = createStore(rootReducer)

function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator>

         <Stack.Screen name="Test" component={Test} />
       </Stack.Navigator>
     </NavigationContainer>
    </Provider>   
  );
}

export default App;


