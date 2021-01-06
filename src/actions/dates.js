export const addStartDate = (startDate, history) => {

    return (dispatch) => {
        dispatch({type: 'ADD_START_DATE', startDate})
        history.push('/carlist')
    }
}

export const addEndDate = (endDate, history) => {

    return (dispatch) => {
        dispatch({type: 'ADD_END_DATE', endDate})
        history.push('/carlist')
    }
}