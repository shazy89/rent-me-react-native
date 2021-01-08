export default (state={cars: [] }, action) => {
    switch(action.type) {
        case 'FETCH_CARS':
            return {
                ...state, 
                cars: action.peyload
            }
            case "ADD_BOOKING":
                const addBooking = 
                 console.log(action.peyload) 
                return state;  
                  
            
        default:
            return state;
    }
}
        
            