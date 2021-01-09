import rentMeApi from '../api/rentMeApi';

const addCars = (cars) => {
    return {
        type: "FETCH_CARS",
        peyload: cars
    };
  }; 

 export const fetchCars =  () => {
     return async dispatch => {
     try {
      const response = await rentMeApi.get('cars');
      dispatch(addCars(response.data))

    } catch (err) {
        console.log(err)
    };
  };
};

const addBook = bookingData => {
  return {
    type: 'ADD_BOOKING',
    peyload: bookingData
  };
};
  
export const bookingCar = ( booking, navigation ) => {
   return async dispatch => {
     try {
      const response = await rentMeApi.post(`cars/${booking.car_id}/bookings`, { booking });
      dispatch(addBook(response.data)); 
      navigation.navigate('Home');
      alert('Your reservation is complete!') 
    } catch (err) {
        console.log(err)
    }

  }
};

      
     
    



      

        