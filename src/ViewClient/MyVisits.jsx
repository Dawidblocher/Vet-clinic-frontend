import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MyVisits = () => {
    
    return (
        <>  
           <DayPicker
     
      selectedDays={[
        new Date(2021, 7, 29),
        new Date(2021, 7, 31),
        
      ]}
    />
        </>
)
}

export default MyVisits