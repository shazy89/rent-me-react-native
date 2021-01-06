import { useState } from 'react';

export default (startDate, endDate) => {
   
    const getFormattedDate = date => {
        const year = date.getFullYear();
        const month = (1 + date.getMonth()).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
      
        return month + '/' + day + '/' + year;
    }
   const pkpDate = startDate ? getFormattedDate(startDate) : null
   const retDate = endDate ? getFormattedDate(endDate) : null

   return [ pkpDate, retDate ];
};



