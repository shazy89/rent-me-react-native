import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Test = ( { navigation } ) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          minimumDate={new Date()}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
        <Text>Hello Test Screen</Text>
        <Button title="HomeScreen" onPress={() => navigation.navigate('Home')} />
        <Button title="TrackListScreen" onPress={() => navigation.navigate('List')} />
        <Button title="Shadow" onPress={() => navigation.navigate('Shadow')} />
      </View>
    );
  };

export default Test;