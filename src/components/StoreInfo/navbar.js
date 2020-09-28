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
        const storeId = event.currentTarget.value
        setActiveStoreId(storeId)
        props.onSelectStore(storeId)
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
            setActiveStoreId(props.selectedId)
        }

    }, [props.selectedId]);

    return (
        <div className="flex justify-between items-center pb-3 md:justify-start">
            <div className="flex-1 flex items-center justify-between">
                <nav className="hidden sm:flex sm:gap-4 sm:grid-cols-4 justify-items-center">
                    {
                        allLocation.edges.map(function (edge) {
                            const activeColor = activeStoreId === edge.node.id ? "border-orange-500 text-orange-700 focus:border-orange-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                            return (
                                <button
                                    type="button"
                                    onClick={onStoreChange}
                                    value={edge.node.id}
                                    key={edge.node.id}
                                    className={`${activeColor} inline-flex justify-center px-1 py-1 sm:pb-0 border-2 rounded-md sm:rounded-none sm:border-0 sm:border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out`}>
                                    {edge.node.name}
                                </button>
                            )
                        })
                    }
                </nav>
                <button type="button" onClick={toggleMobMenu} className="border-2 border-solid px-2 flex rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out sm:hidden">
                    {activeStoreName || 'Select Store'}
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </div>
            <Transition
                show={mobMenuOpen}
                enter="transition duration-200 ease-out transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-100 ease-in transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div ref={ref} className="absolute top-0 left-0 min-w-1/4 transition transform origin-top-left sm:hidden">
                        <div className="rounded-lg shadow-lg bg-gray-200 divide-y-2 divide-gray-600 border-solid border-2 border-gray-600">
                            <div className="pt-5 pb-6 px-5 space-y-6">
                                <div>
                                    <nav className="grid gap-6">
                                        <span className="w-full flex flex-col">
                                            {allLocation.edges.map(function (edge, i) {
                                                const activeColor = activeStoreId === edge.node.id ? "text-orange-800" : "border-transparent text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                                                return (
                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            onClick={onStoreChange}
                                                            value={edge.node.id}
                                                            key={edge.node.id}
                                                            className={`${activeColor} inline-flex justify-center px-1 py-1 sm:pb-0 rounded-md sm:rounded-none sm:border-0 sm:border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out`}>
                                                            {edge.node.name}
                                                        </button>
                                                        {i === 0 && <div className="-mr-2">
                                                            <button type="button" onClick={toggleMobMenu} className="absolute inline-flex items-center justify-center pl-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>}
                                                    </div>
                                                )
                                            })}
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default NavBar;
