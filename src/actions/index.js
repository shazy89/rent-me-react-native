import rentMeApi from '../api/rentMeApi';

export const fetchCars = dispatch => async () => {
    
    const response = await rentMeApi.get('cars');
    console.log(response.data)
    dispatch({type: 'FETCH_CARS', peyload: response.data})
};

//  export const fetchCars = () => {
//        
//      return (dispatch) => {
//          fetch('https://rent-me-back-end.herokuapp.com/cars')
//              .then( resp => resp.json() )
//              .then( cars => {  
//                  dispatch(addCars(cars))})
//      }
//  }