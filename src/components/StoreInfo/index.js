import React, { useState, useEffect } from 'react'
import NavBar from './navbar'
import StoreDetails from './storeDetails'

const StoreInfo = (props) => {
    const [activeStoreId, setActiveStoreId] = useState(null)

    const handleStoreSelect = (storeId) => {
        setActiveStoreId(storeId)
        props.onInfoSelectStore(storeId)
    }

    useEffect(() => {
      if (props.selectedId) {
        setActiveStoreId(props.selectedId)
      }
      
    }, [props.selectedId])

    return (
        <div className='text-left min-h-full'>
            <div className='relative site-background-color'>
                <NavBar selectedId={activeStoreId} onInfoSelectStore={handleStoreSelect} />
            </div>
            <div className='mt-2 sm:justify-center lg:justify-start'>
                <StoreDetails selectedId={activeStoreId} />
            </div>
        </div>
    )
}

export default StoreInfo
