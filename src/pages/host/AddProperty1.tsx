import React from 'react'
import NavbarHost from '../../components/host/NavbarHost'
import Footer from '../../components/user/Footer'
import StepIndicator from '../../components/host/StepIndicator'
import Apartment from '../../assets/host/apartment.png'
import Flat from '../../assets/host/flat.png'
import Room from '../../assets/host/room.png'
import Villa from '../../assets/host/villa.png'
import {Link} from 'react-router-dom'


const HouseTypes = [
    { id: 1, name: 'Apartment', images:  Apartment},
    { id: 2, name: 'Flat', images: Flat},
    { id: 3, name: 'Room', images: Room},
    { id: 4, name: 'Villa', images: Villa}
]

const AddProperty1: React.FC = () => {
    const steps = [
        { name: "Property Type", path: "/host/add-property-1" },
        { name: "Description", path: "/host/add-property-2" },
        { name: "Upload Documents", path: "/host/add-property-3" },
        { name: "Amenities", path: "" },
        { name: "Completed", path: "" },
      ];


    return (
        <div>
            <NavbarHost />
            <div className="p-16 flex items-center justify-center">
                <StepIndicator steps={steps} currentStep={0} />
            </div>
            <div className="px-16 flex flex-col gap-8 overflow-hidden">
                <h1 className="text-4xl font-bold text-header-600 w-[45%]">What kind of place will you host ?</h1>
                <div className="flex flex-col gap-4 ">
                    <p>Please select only one and proceed</p>
                    <div className="grid grid-cols-4 h-[100px] gap-16">
                        {
                            HouseTypes.map(item => {
                                return (
                                    <div key={item.id} className="flex gap-4 items-center bg-header-200 rounded-2xl cursor-pointer">
                                        <img src={item.images} alt={item.name} className="h-full object-fit w-24 rounded-l-2xl" />
                                        <p className="font-semibold ">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center justify-between pt-10 pb-32">
                        <Link to="/host/add-property-2" className="bg-blue-600 text-white py-2 px-8 rounded-full">Next</Link>
                        <button className="bg-header-600 text-white py-2 px-8 rounded-full">Cancel</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddProperty1