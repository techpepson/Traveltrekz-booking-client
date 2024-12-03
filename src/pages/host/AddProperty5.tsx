import React from 'react'
import NavbarHost from '../../components/host/NavbarHost'
import Footer from '../../components/user/Footer'
import StepIndicator from '../../components/host/StepIndicator'
import {Link} from "react-router-dom"
import Congrats from '../../assets/host/congrats.png'

const AddProperty5: React.FC = () => {
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
                <StepIndicator steps={steps} currentStep={4} />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-10 flex flex-col-reverse'>
                <div className="md:px-16 p-8 flex flex-col gap-8 overflow-hidden md:mt-10">
                    <h1 className='text-4xl font-bold text-header-600'>All Set And Done. Ready To Host Property?</h1>
                    <p>Your property is now live on TravelTrekz. Sit back, relax, and let the bookings roll in. We’ll take care of the rest, from guest communication to secure payments, while you focus on welcoming your guests!</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <p>Accept all terms and conditions</p>
                        </div>
                        <div className='bg-blue-600 py-4 px-8 rounded-full text-white w-fit max-md:text-sm'>Post My Property</div>
                    </div>
                </div>
                <img src={Congrats} alt="congratulations" className='w-full h-full' />
            </div>
            <Footer />
        </div>
    )
}

export default AddProperty5