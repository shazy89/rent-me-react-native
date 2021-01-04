import rentMeApi from '../api/rentMeApi';

        
// export const fetchCars = dispatch => async () => {
//      const response = await rentMeApi.get('cars');
//      dispatch({type: 'fetch_tracks', peyload: response.data})
//  };
const addCars = (cars) => {
    return {
        type: "FETCH_CARS",
        peyload: cars
    }
    }

  export const fetchCars = () => {
      return (dispatch) => {
          fetch('http://localhost:3001/cars')
              .then( resp => resp.json() )
              .then( cars => {  
                  dispatch(addCars(cars))})
      }
  }
        