import React from 'react'
import NavbarHost from '../../components/host/NavbarHost'
import Footer from '../../components/user/Footer'
import StepIndicator from '../../components/host/StepIndicator'
import {Link} from "react-router-dom"

const AddProperty3: React.FC = () => {
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
                <StepIndicator steps={steps} currentStep={2} />
            </div>
            <div className="px-16 flex flex-col gap-8 overflow-hidden">
                <h1 className="text-4xl font-bold w-[50%] text-header-600">Add facilities available at your place.</h1>
                
            </div>
            <Footer />
        </div>
    )
}

export default AddProperty3