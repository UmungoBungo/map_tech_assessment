import React from 'react';
import NavBar from './navbar'
import StoreDetails from './storeDetails'

const StoreInfo = () => (
    <div className="text-left">
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-0">
            Store locations
        </p>
        <div className="relative site-background-color">
            <NavBar />
        </div>
        <div className="mt-2 sm:justify-center lg:justify-start">
            <StoreDetails />
        </div>
    </div>
);

export default StoreInfo;
