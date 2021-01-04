export default (state={cars: []}, action) => {
    switch(action.type) {
        
        case 'FETCH_CARS':
            console.log(action.payload)
            return {
                ...state, 
                cars: action.peyload
            } 
        default:
            return state;
    }
}