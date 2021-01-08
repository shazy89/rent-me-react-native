export default (state={cars: []}, action) => {
    switch(action.type) {
        case 'FETCH_CARS':
            return {
                ...state, 
                cars: action.peyload
            }
            case "ADD_BOOKING":
                
                let cars2 = state.cars.map(car => {
                    if(car.id === parseInt(action.bookingData.car_id)){
                        return  car = { ...car, bookings: [...car.bookings, action.bookingData ] }
                       } else {
                           return  car
                       }
                   })  
                return {...state, cars: cars2,
                 loading: false };     
            
        default:
            return state;
    }
}
        
            