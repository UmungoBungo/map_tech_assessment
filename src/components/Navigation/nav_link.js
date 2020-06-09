import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({extraClass, route, text}) => (
    <Link
        to={route}
        className={extraClass + ' px-3 py-2 rounded-md text-sm font-medium uppercase leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out text-gray-300 hover:text-white hover:bg-gray-700'}
        activeStyle={{ color: "white" }}
        activeClassName={'bg-gray-900 hover:bg-gray-900'}>
        {text}
    </Link>
);

export default NavLink;