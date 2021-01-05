import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SelectDates = () => {
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

   return (
       <>
      <View>
        <Button onPress={showDatepicker} title="Pick Up" />
      </View>
      <View>
        <Button onPress={showDatepicker} title="Return" />
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
    </>
 );
};

export default SelectDates