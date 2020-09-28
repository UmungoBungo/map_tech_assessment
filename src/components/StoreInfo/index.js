import React, { useState } from 'react';
import NavBar from './navbar'
import StoreDetails from './storeDetails'

const StoreInfo = (props) => {
    const [activeStoreId, setActiveStoreId] = useState(null);

    const handleStoreSelect = (storeID) => {
        setActiveStoreId(storeID)
        props.onSelectStore(storeID)
    }

    return (
        <div className="text-left min-h-full">
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-0">
                Store locations
            </p>
            <div className="relative site-background-color">
                <NavBar onSelectStore={handleStoreSelect} />
            </div>
            <div className="mt-2 sm:justify-center lg:justify-start">
                <StoreDetails selectedId={activeStoreId} />
            </div>
        </div>
    )
}

export default StoreInfo
