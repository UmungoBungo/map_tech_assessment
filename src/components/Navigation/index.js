import React, { useState } from 'react';
import { Link, useStaticQuery, graphq } from 'gatsby';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import LogoImage from './logo_image'
import { Location } from '@reach/router';

const Navigation = ({ path }) => {
    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    const toggleMobMenu = () => {
        setMobMenuOpen(!mobMenuOpen)
    }

    const closeMobMenu = () => {
        setMobMenuOpen(false)
    }

    const { location } = path;

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth
                        authUser={authUser}
                        toggleMobMenu={toggleMobMenu}
                        mobMenuOpen={mobMenuOpen}
                        closeMobMenu={closeMobMenu}
                        path={path}
                    />
                ) : (
                        <NavigationNonAuth
                            toggleMobMenu={toggleMobMenu}
                            mobMenuOpen={mobMenuOpen}
                            closeMobMenu={closeMobMenu}
                            path={path}
                        />
                    )
            }
        </AuthUserContext.Consumer>
    );
};

const NavigationAuth = ({ authUser, toggleMobMenu, mobMenuOpen, closeMobMenu, path }) => (
    <nav className="bg-gray-700" onBlur={closeMobMenu}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        onClick={toggleMobMenu}>
                        {/* <!-- Icon when menu is closed. --> */}
                        {!mobMenuOpen && <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}
                        {/* <!-- Icon when menu is open. --> */}
                        {mobMenuOpen && <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0">
                        <LogoImage />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            <Link to={ROUTES.LANDING} className={'        px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out ' + (path === '/' ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700')}>Home</Link>
                            <Link to={ROUTES.IDEA_LIST} className={'ml-4  px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out ' + (path === '/idea-list' ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700')}>Ideas</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                        <div>
                            <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>
                        {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                            <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <Link to={ROUTES.ACCOUNT} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Your Account</Link>
                                <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Settings</a>
                                <div onClick='firebase.signout' className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Sign out
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, toggle classes based on menu state. --> */}
        <div className={mobMenuOpen ? "" : "hidden sm:hidden"}>
            <div className="px-2 pt-2 pb-3">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
            </div>
        </div>
    </nav >
);

const NavigationNonAuth = ({ toggleMobMenu, mobMenuOpen, closeMobMenu, path }) => (
    <nav className="bg-gray-800" onBlur={closeMobMenu}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        onClick={toggleMobMenu}>
                        {/* <!-- Icon when menu is closed. -->
          <!-- Menu open: "hidden", Menu closed: "block" --> */}
                        {!mobMenuOpen && <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}
                        {/* <!-- Icon when menu is open. -->
          <!-- Menu open: "block", Menu closed: "hidden" --> */}
                        {mobMenuOpen && <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <LogoImage />
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            <Link to={ROUTES.LANDING} className={'        px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out ' + (path === '/' ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700')}>Home</Link>
                            <Link to={ROUTES.IDEA_LIST} className={'ml-4  px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out ' + (path === '/idea-list' ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700')}>Ideas</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to={ROUTES.SIGN_IN} className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 border-solid border-2 border-gray-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign In</Link>
                    <Link to={ROUTES.SIGN_UP} className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-purple-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign Up</Link>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, toggle classes based on menu state. --> */}
        <div className={mobMenuOpen ? "" : "hidden sm:hidden"}>
            <div className="px-2 pt-2 pb-3">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a>
                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</a>
            </div>
        </div>
    </nav>
);

export default props => (
    <Location>
        {locationProps => <Navigation path={locationProps.location.pathname} />}
    </Location>
);
