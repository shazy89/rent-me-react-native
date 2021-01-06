import { combineReducers } from 'redux';
import cars from './carsReducer';
import dates from './datesReducer'


export default combineReducers({
    cars,
    dates
})