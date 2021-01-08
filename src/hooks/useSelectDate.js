import { useState, useEffect } from 'react';

export default (addPickUpDate, addReturnDate) => {
   
    const [pickUpDate, setPickUpDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(nextDay)
    const [showReturn, setShowReturn] = useState(false);
    const [showPickUp, setShowPickUp] = useState(false);
    const [pickUpButton, setPickUpButton] = useState('#ffa500');
    const [returnButton, setReturnButton] = useState('#ffa500');
    const [nextDay, setNextDay] = useState('');

    const onChangePickUpDate = (event, selectedDate) => {
        const currentDate = selectedDate || pickUpDate;
        setShowPickUp(Platform.OS === 'ios');
        setPickUpDate(currentDate);
        addPickUpDate(currentDate);
      };

    const onChangeReturnDate = (event, selectedDate) => {
        const currentDate = selectedDate || returnDate;
        setShowReturn(Platform.OS === 'ios');
        setReturnDate(currentDate);
        addReturnDate(currentDate)
      };

      const showReturnCalender = () => {
        setShowReturn(true)
        setShowPickUp(false)
        setPickUpButton('#ffa500')
        setReturnButton('#D97E00')
      };
      const showPickUpCalender = () => {
        setShowPickUp(true)
        setShowReturn(false)
        setReturnButton('#ffa500')
        setPickUpButton('#D97E00')
      };  
        const selectNextDay = (pickUpDate) => {
         // let day = new Date(pickUpDate)
          pickUpDate.setDate(pickUpDate.getDate() + 1)
              return setNextDay(pickUpDate)
        };
        useEffect(() => {
        selectNextDay(pickUpDate)},[])
            

    return [pickUpDate, returnDate, showReturn, 
            showPickUp, showReturnCalender, showPickUpCalender, 
            onChangePickUpDate, onChangeReturnDate, pickUpButton, returnButton, nextDay];


};
    
    
