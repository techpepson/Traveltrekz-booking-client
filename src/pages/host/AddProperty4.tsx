import React from 'react'
import NavbarHost from '../../components/host/NavbarHost'
import Footer from '../../components/user/Footer'
import StepIndicator from '../../components/host/StepIndicator'
import Apartment from '../../assets/host/apartment.png'
import Flat from '../../assets/host/flat.png'
import Room from '../../assets/host/room.png'
import Villa from '../../assets/host/villa.png'
import {Link} from 'react-router-dom'


const Accessories = [
    { id: 1, name: 'Television', images:  Apartment},
    { id: 2, name: 'Wifi', images: Flat},
    { id: 3, name: 'Washer', images: Room},
    { id: 4, name: 'Balcony', images: Villa},
    { id: 5, name: 'Cleaner', images: Villa},
    { id: 6, name: 'Radio', images: Villa},
    { id: 7, name: 'Lift', images: Villa},
    { id: 8, name: 'Other', images: Villa},
]

const Safety = [
    { id: 1, name: 'Television', images:  Apartment},
    { id: 2, name: 'Wifi', images: Flat},
    { id: 3, name: 'Washer', images: Room},
    { id: 4, name: 'Balcony', images: Villa},
]

const AddProperty4: React.FC = () => {
    const steps = [
        { name: "Property Type", path: "/host/add-property-1" },
        { name: "Description", path: "/host/add-property-2" },
        { name: "Upload Documents", path: "/host/add-property-3" },
        { name: "Amenities", path: "/host/add-property-4" },
        { name: "Completed", path: "/host/add-property-5" },
      ];


    return (
        <div>
            <NavbarHost />
            <div className="p-16 flex items-center justify-center">
                <StepIndicator steps={steps} currentStep={3} />
            </div>
            <div className="px-16 flex flex-col gap-8 overflow-hidden">
                <h1 className="text-4xl font-bold text-header-600 w-[45%]">Add amenities available at your place.</h1>
                <div className="flex flex-col gap-4 ">
                    <div className="grid grid-cols-4 h-[100px] gap-4">
                        {
                            Accessories.map(item => {
                                return (
                                    <div key={item.id} className="flex gap-4 items-center bg-header-200 rounded-2xl cursor-pointer">
                                        <img src={item.images} alt={item.name} className="h-full object-fit w-24 rounded-l-2xl" />
                                        <p className="font-semibold ">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="p-16 flex flex-col gap-8 overflow-hidden ">
                <h1 className="text-4xl font-bold text-header-600 w-[45%]">Add safety available at your place.</h1>
                <div className="flex flex-col gap-4 ">
                    <div className="grid grid-cols-4 h-[100px] gap-4">
                        {
                            Safety.map(item => {
                                return (
                                    <div key={item.id} className="flex gap-4 items-center bg-header-200 rounded-2xl cursor-pointer">
                                        <img src={item.images} alt={item.name} className="h-full object-fit w-24 rounded-l-2xl" />
                                        <p className="font-semibold ">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-16 pb-20">
                <div className="flex gap-4 items-center">
                    <Link to="/host/add-property-5" className="bg-blue-600 text-white py-2 px-8 rounded-full">Next</Link>
                    <Link to="/host/add-property-3" className="bg-blue-600 text-white py-2 px-8 rounded-full">Back</Link>
                </div>
                <button className="bg-header-200 text-white py-2 px-8 rounded-full">Cancel</button>
            </div>
            <Footer />
        </div>
    )
}

export default AddProperty4