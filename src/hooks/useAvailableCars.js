
export default (startDate, endDate, cars) => {

    const getSearchDates = (stDate, endDate ) => {
        let days = [];
        const daysInTime = endDate.getTime() - stDate.getTime();
        const totalDays = daysInTime / (1000 * 3600 * 24);
        for (let i = 0; i < Math.ceil(totalDays); i++){
          let nextDay = new Date(stDate);
          nextDay.setDate(nextDay.getDate() + i);
          days = [...days, nextDay.toLocaleDateString()];
      };
      return days
   };
   
   const compare = (arr1, arr2) => {
       const finalArray = [];
       arr1.forEach(e1 => arr2.forEach(e2 =>
         { if (e1 === e2){
           finalArray.push(e1)
         };
        }));
    return finalArray;
  };

    const bookings = cars.map(car => {
     return  car.bookings.filter(booking => {    
      return compare(getSearchDates(new Date(booking.startDate), new Date(booking.endDate)), getSearchDates(startDate, endDate)).length !== 0
     });     
  }); 

    const carList = cars.filter(car => !bookings.flat().map(bkId => parseInt(bkId.car_id)).includes(car.id)); 

    return [carList];
};

