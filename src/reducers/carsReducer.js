export default (state={cars: []}, action) => {
    switch(action.type) {
        case 'FETCH_CARS':
            return {
                ...state, 
                cars: action.peyload
            } 
        default:
            return state;
    }
}
        
            