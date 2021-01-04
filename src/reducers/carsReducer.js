export default (state={cars: [], bookingErrors: [], loading: true }, action) => {
    switch(action.type) {
        case 'FETCH_CARS':
            return action.peyload 
        default:
            return state;
    }
}