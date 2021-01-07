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
 
 // export const getSearchDates = (stDate, endDate ) => {
 //       let days = [];
 //       const daysInTime = endDate.getTime() - stDate.getTime();
 //       const totalDays = daysInTime / (1000 * 3600 * 24);
 //     for (let i = 0; i < Math.ceil(totalDays); i++){
 //       let nextDay = stDate;
 //       
 //       nextDay.setDate(nextDay.getDate() + i)
 //       days = [...days, nextDay]
 //      };
 // 
 //      return days
 //   }; 

        


        