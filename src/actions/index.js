import rentMeApi from '../api/rentMeApi';

const addCars = (cars) => {
    return {
        type: "FETCH_CARS",
        peyload: cars
    };
  }; 
 export const fetchCars =  () => {
     return async dispatch => {
      const response = await rentMeApi.get('cars');
      console.log(response.data)
      try {
      dispatch(addCars(response.data))
    } catch (err) {
        console.log(err)
    };
  };
};
      

        