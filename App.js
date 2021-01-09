import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './src/reducers/index';
import thunk from 'redux-thunk';
import BottomNavigator from './src/BottomNavigator';
import AvailableCarsScreen from './src/screens/AvailableCarsScreen'
import CarDetailScreen from './src/screens/CarDetailScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
     <SafeAreaProvider>
       <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#ffa500' }}}>
         <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false, title: 'Home Screen' }} />
         <Stack.Screen name="Availability" component={AvailableCarsScreen} 
           options={{ title: 'Available Vehicles' }} />
         <Stack.Screen name="CarDetail" component={CarDetailScreen} 
           options={{ title: 'RentMe' }}/>
       </Stack.Navigator>
       </SafeAreaProvider>
     </NavigationContainer>
    </Provider>   
  );
}

export default App;




