import { useState} from 'react';


export default () => {
    const [pickUpDate, setPickUpDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(pickUpDate)
    const [showReturn, setShowReturn] = useState(false);
    const [showPickUp, setShowPickUp] = useState(false);


    const onChangePickUpDate = (event, selectedDate) => {
        const currentDate = selectedDate || pickUpDate;
        setShowPickUp(Platform.OS === 'ios');
        setPickUpDate(currentDate);
      };
    const onChangeReturnDate = (event, selectedDate) => {
      console.log(selectedDate)
        const currentDate = selectedDate || returnDate;
        setShowReturn(Platform.OS === 'ios');
        setReturnDate(currentDate);
      };
      const showReturnCalender = () => {
        setShowReturn(true)
      //  setShowPickUp(false)
      };
      const showPickUpCalender = () => {
        setShowPickUp(true)
      //  setShowReturn(false)
      };  

    return [pickUpDate, returnDate, showReturn, 
            showPickUp, showReturnCalender, showPickUpCalender, 
            onChangePickUpDate, onChangeReturnDate ];

};