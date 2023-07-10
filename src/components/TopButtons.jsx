import React from 'react'

function TopButtons({ setQuery }) {

 const cities = [
        {  
           id: 1,
           title : 'London'
        },
        {  
            id: 1,
            title : 'Hyderabad'
         },
         {  
            id: 1,
            title : 'Sydney'
         },
         {  
            id: 1,
            title : 'America'
         },
         {  
            id: 1,
            title : 'canada'
         },

 ]
 return <div className="flex items-center justify-around my-6">
    {cities.map((city)=>(
        <button className="text-white text-lg font-medium" 
        onClick={() => setQuery({ q: city.title })}
        >{city.title}</button>
    ))}
 </div>
}

export default TopButtons