import React from 'react'
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import { Link } from 'react-router-dom';


const PropertiesHost: React.FC = () => {
    return (
        <div>
            <NavbarHost />
            <div className='md:p-16 max-md:mt-20 max-md:p-4'>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl md:text-4xl font-bold text-header-600">List Properties</h1>
                    <Link to="/host/add-property-1" className="bg-blue-600 rounded-3xl py-2 px-4 text-white cursor-pointer max-md:text-sm">Add Property</Link>
                </div>
                <div role="tablist" className="tabs tabs-bordered py-6">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Approved" defaultChecked />
                    <div role="tabpanel" className="tab-content p-10">
                        {/* Approved Content */}
                    </div>
                    
                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-semibold" aria-label="Pending"/>
                    <div role="tabpanel" className="tab-content p-10">
                        {/* Pending Content */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PropertiesHost