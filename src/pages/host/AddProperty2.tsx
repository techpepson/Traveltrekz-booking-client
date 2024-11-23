import React from 'react'
import NavbarHost from '../../components/host/NavbarHost'
import Footer from '../../components/user/Footer'
import StepIndicator from '../../components/host/StepIndicator'
import {Link} from "react-router-dom"

const AddProperty2: React.FC = () => {
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
                <StepIndicator steps={steps} currentStep={1} />
            </div>
            <div className="px-16 flex flex-col gap-8 overflow-hidden">
                <h1 className="text-4xl font-bold w-[50%] text-header-600">Add a short description of your place</h1>
                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-header-200 rounded-2xl py-6 px-10">
                        <h1 className="text-xl text-header-600 font-semibold">Rental Unit</h1>
                        <p>A rented place within a multi-unit residential building or complex.</p>
                    </div>
                    <div className="bg-header-200 rounded-2xl py-6 px-10">
                        <h1 className="text-xl text-header-600 font-semibold">Shared Unit</h1>
                        <p>A rented place within a multi-unit residential building or complex.</p>
                    </div>
                </div>
            </div>
            <form className="p-16 flex flex-col gap-4">
                <div>
                    <label>Name of the property</label>
                    <input type="text" className="w-full p-1 border border-black/50 rounded-lg" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea rows={6} className="w-full p-1 border border-black/50 rounded-lg" />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" className="w-full p-1 border border-black/50 rounded-lg" />
                </div>
                <div className="flex items-center justify-between py-10">
                    <div className="flex gap-4 items-center">
                        <Link to="/host/add-property-3" className="bg-blue-600 text-white py-2 px-8 rounded-full">Next</Link>
                        <Link to="/host/add-property-1" className="bg-blue-600 text-white py-2 px-8 rounded-full">Back</Link>
                    </div>
                    <button className="bg-header-600 text-white py-2 px-8 rounded-full">Cancel</button>
                </div>
                
            </form>
            <Footer />
        </div>
    )
}

export default AddProperty2