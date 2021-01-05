
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Test';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './src/reducers/index';
import thunk from 'redux-thunk';
import TestScreen from './src/screens/TestScreen'
import TrackListScreen from './TrackListScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="Test" component={Test} />
         <Stack.Screen name="List" component={TrackListScreen} />
       </Stack.Navigator>

     </NavigationContainer>
    </Provider>   
  );
}

export default App;


