import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { Transition } from '@tailwindui/react'


const NavBar = (props) => {
    const [activeStoreId, setActiveStoreId] = useState(null);
    const [activeStoreName, setActiveStoreName] = useState(null);
    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    const toggleMobMenu = () => {
        setMobMenuOpen(!mobMenuOpen)
    }

    const onStoreChange = event => {
        const storeId = event.currentTarget.id
        const storeName = event.currentTarget.name
        setActiveStoreId(storeId)
        setActiveStoreName(storeName)
        props.onInfoSelectStore(storeId)
        setMobMenuOpen(false)
    };

    const { allLocation } = useStaticQuery
        (graphql`
            query {
                allLocation {
                    edges {
                        node {
                            name,
                            id
                        }
                    }
                }
            }
        `)

    useEffect(() => {
        if (props.selectedId) {
            const storeName = allLocation.edges.filter((edge) => { return edge.node.id === props.selectedId })[0].node.name
            setActiveStoreId(props.selectedId)
            setActiveStoreName(storeName)
        }

    }, [props.selectedId]);

    function StoreList() {
        return allLocation.edges.map(function (edge) {
            const activeColor = activeStoreId === edge.node.id ? 'border-orange-500 text-orange-700 focus:border-orange-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
            return (
                <button
                    type='button'
                    onClick={onStoreChange}
                    name={edge.node.name}
                    id={edge.node.id}
                    key={edge.node.id}
                    className={`${activeColor} inline-flex sm:justify-center px-1 pt-1 pb-0 border-0 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out`}>
                    {edge.node.name}
                </button>
            )
        })
    }

    return (
        <div className='flex justify-between items-center pb-3 md:justify-start'>
            <div className='flex-1 flex items-center justify-between'>
                <nav className='hidden sm:flex sm:gap-4 sm:grid-cols-4 justify-items-center'>
                    <span className='justify-left pt-1 pb-0 text-sm text-gray-700 font-medium leading-5'>
                        Stores:
                    </span>
                    <StoreList />
                </nav>
                <button type='button' onClick={toggleMobMenu} className='border-2 border-solid px-2 flex rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out sm:hidden'>
                    {activeStoreName && <span className='text-orange-600 hover:text-orange-700 focus:text-orange-700'>
                        {activeStoreName}
                    </span>}
                    {!activeStoreName && <span className='text-gray-500 hover:text-gray-600 focus:text-gray-600'>
                        Select Store
                    </span>}
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                    </svg>
                </button>
            </div>
            <Transition
                show={mobMenuOpen}
                enter='transition duration-200 ease-out transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition duration-100 ease-in transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                {(ref) => (
                    <div ref={ref} className='absolute top-0 left-0 min-w-1/4 transition transform origin-top-left sm:hidden'>
                        <div className='rounded-lg shadow-lg bg-gray-200 divide-y-2 divide-gray-600 border-solid border-2 border-gray-600'>
                            <div className='flex py-3 px-5'>
                                <nav className='grid gap-6'>
                                    <span className='w-full flex flex-col'>
                                        <StoreList />
                                    </span>
                                </nav>
                                <button type='button' onClick={toggleMobMenu} className='flex absolute mt-1 mr-1 top-0 right-0'>
                                    <svg className='w-6 h-6 mt-0' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                        <path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default NavBar;
