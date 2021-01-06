export const addPickUpDate = (startDate) => {
    return (dispatch) => {
        dispatch({type: 'ADD_START_DATE', peyload: startDate})
    };
};

export const addReturnDate = (endDate) => {
    return (dispatch) => {
        dispatch({type: 'ADD_END_DATE', peyload: endDate})
    };
};
 


        


        