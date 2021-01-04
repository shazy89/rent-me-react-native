import rentMeApi from '../api/rentMeApi';

const addCars = (cars) => {
    return {
        type: "FETCH_CARS",
        peyload: cars
    }
    } 
 export const fetchCars =  () => {
     return async dispatch => {
      const response = await rentMeApi.get('cars');
      console.log(response.data)
      try {
      dispatch(addCars(response.data))
    } catch (err) {
        console.log(err)
    }
  }
};
      

 //
 //  export const fetchCars = () => {
 //      return (dispatch) => {
 //          fetch('http://localhost:3001/cars')
 //              .then( resp => resp.json() )
 //              .then( cars => {  
 //                  dispatch(addCars(cars))})
 //      }
 //  }
        