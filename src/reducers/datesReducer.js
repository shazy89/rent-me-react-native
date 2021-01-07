export default (state={
    startDate: new Date(),
    endDate: ''
    }, action) => {
   switch (action.type) {
       case "ADD_START_DATE":
           return {...state, startDate: action.peyload}
       case "ADD_END_DATE":
           return {...state, endDate: action.peyload}
       default:
           return state;
       };
 };
  
