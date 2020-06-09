
import React from 'react';
import { Link } from 'gatsby';

const MobNavLink = ({extraClass, route, text}) => (
    <Link
        to={route}
        className={extraClass + ' block px-3 py-2 rounded-md text-base font-medium uppercase text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'}
        activeStyle={{ color: "white" }}
        activeClassName={'bg-gray-900'}>
        {text}
    </Link>
);

export default MobNavLink;