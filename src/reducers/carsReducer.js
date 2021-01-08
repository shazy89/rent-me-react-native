export default (state={cars: [] }, action) => {
    switch(action.type) {
        case 'FETCH_CARS':
            return {
                ...state, 
                cars: action.peyload
            }
            case "ADD_BOOKING":
               const bookingAction = state.cars.map(car => {
                   if(car.id == action.peyload.car_id){
                   return car = { ...car, bookings: [...car.bookings, action.peyload ] }
                   } else 
                   return car
               })  
                    
                return {...state, cars: bookingAction};  
                  
            
        default:
            return state;
    }
}
        
            