import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby'


const NavBar = (props) => {
    const [activeStoreId, setActiveStoreId] = useState(null);

    const onStoreChange = event => {
        setActiveStoreId(event.currentTarget.value)
        props.onSelectStore(event.currentTarget.value)
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

    return (
        <div className="flex justify-between items-center py-3 md:justify-start">
            <div className="flex-1 flex items-center justify-between space-x-12">
                <nav className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-4 justify-items-center">
                    {
                        allLocation.edges.map(function (edge, i) {
                            const activeColor = activeStoreId == edge.node.id ? "border-orange-500 text-gray-900 focus:border-orange-700" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
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
                <div className="flex items-center space-x-8">
                </div>
            </div>
        </div>
    );
};

export default NavBar;
