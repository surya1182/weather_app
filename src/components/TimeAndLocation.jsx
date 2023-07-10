import React from 'react'



function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
    return (
        <div>
          <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
            Monday,10 july 2023 | Local Time: 10:10 AM
            </p>
          </div>
    
          <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
          </div>
        </div>
      );
}

export default TimeAndLocation