import React, { useState } from 'react';
import { propertyDetails } from "../../dummy-data/home-property";
import PropertyCard from "./PropertyCard";

const Property = ({displayCount}) => {

    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    propertyDetails.slice(0, displayCount).map((property, index) => {
                        let position;
                        if (index % 3 === 0) {
                            position = 'left'; // First column
                        } else if (index % 3 === 1) {
                            position = 'middle'; // Middle column
                        } else {
                            position = 'right'; // Last column
                        }

                        return (
                            <PropertyCard 
                                key={property.id} 
                                name={property.title} 
                                location={property.location} 
                                images={property.images} // Pass images prop
                                range={property.amount} 
                                id={property.id}
                                position={position} 
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Property;
