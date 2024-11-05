import React from 'react'
import Property from '../../assets/user/property.png'
import Property2 from '../../assets/user/property2.png'
import Property3 from '../../assets/user/property3.png'

const data = [
    {id: 1, name: "Chose the right property", category: 'economy', image: Property},
    {id: 2, name: "Best environment for rentals", category: 'lifestyle', image: Property2},
    {id: 3, name: "Boys Hotel Apartment", category: 'property', image: Property3},
]

const Guide = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data.map((item) => {
            return(
                <div key={item.id} className="relative rounded-lg overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white font-medium text-lg">{item.name}</h3>
                        <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Guide