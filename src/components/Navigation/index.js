import React, { useState } from 'react';
import { Link } from 'gatsby';
import NavLink from './nav_link'
import MobNavLink from './mob_nav_link'
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import LogoImage from './logo_image'
import ProfilePicWithDefault from '../Account/profilePicWithDefault'

const Navigation = () => {
    const [mobMenuOpen, setMobMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleMobMenu = () => {
        setMobMenuOpen(!mobMenuOpen)
    }

    const closeMobMenu = () => {
        setMobMenuOpen(false)
    }

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen)
    }

    const closeProfileMenu = () => {
        setProfileMenuOpen(false)
    }

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth
                        authUser={authUser}
                        toggleMobMenu={toggleMobMenu}
                        mobMenuOpen={mobMenuOpen}
                        closeMobMenu={closeMobMenu}
                        toggleProfileMenu={toggleProfileMenu}
                        profileMenuOpen={profileMenuOpen}
                        closeProfileMenu={closeProfileMenu}
                    />
                ) : (
                        <NavigationNonAuth
                            toggleMobMenu={toggleMobMenu}
                            mobMenuOpen={mobMenuOpen}
                            closeMobMenu={closeMobMenu}
                        />
                    )
            }
        </AuthUserContext.Consumer>
    );
};

const NavigationAuth = ({ authUser, toggleMobMenu, mobMenuOpen, closeMobMenu, toggleProfileMenu, profileMenuOpen, closeProfileMenu }) => (
    <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        onClick={toggleMobMenu}>
                        <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {!mobMenuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            {mobMenuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />}
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0">
                        <LogoImage />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            <NavLink route={ROUTES.LANDING} text='home' />
                            <NavLink route={ROUTES.IDEA_LIST} text='ideas' extraClass='ml-4' />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to={ROUTES.NEW_IDEA} className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 cta-button focus:shadow-outline-purple flex">
                        New Idea
                    </Link>
                    <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <div className="ml-3 relative">
                        <Link to={ROUTES.ACCOUNT} className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white">
                            <span className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                <ProfilePicWithDefault pictureURL={authUser.picture} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, toggle classes based on menu state. --> */}
        <div className={mobMenuOpen ? "" : "hidden sm:hidden"}>
            <div className="px-2 pt-2 pb-3" onBlur={closeMobMenu}>
                <MobNavLink route={ROUTES.LANDING} text='home' />
                <MobNavLink route={ROUTES.IDEA_LIST} text='ideas' extraClass='mt-1' />
            </div>
        </div>
    </nav >
);

const NavigationNonAuth = ({ toggleMobMenu, mobMenuOpen, closeMobMenu }) => (
    <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                        onClick={toggleMobMenu}>
                        <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {!mobMenuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            {mobMenuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />}
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <LogoImage />
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            <NavLink route={ROUTES.LANDING} text='home' />
                            <NavLink route={ROUTES.IDEA_LIST} text='ideas' extraClass='ml-4' />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to={ROUTES.SIGN_IN} className="ml-4 px-3 py-2 rounded-md text-sm font-medium uppercase leading-5 text-gray-300 hover:text-white hover:bg-gray-700 border-solid border-2 border-gray-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign In</Link>
                    <Link to={ROUTES.SIGN_UP} className="ml-4 px-3 py-2 rounded-md text-sm font-medium uppercase leading-5 cta-button focus:shadow-outline-purple">Sign Up</Link>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, toggle classes based on menu state. --> */}
        <div className={mobMenuOpen ? "" : "hidden sm:hidden"}>
            <div className="px-2 pt-2 pb-3" onBlur={closeMobMenu}>
                <MobNavLink route={ROUTES.LANDING} text='home' />
                <MobNavLink route={ROUTES.IDEA_LIST} text='ideas' extraClass='mt-1' />
            </div>
        </div>
    </nav>
);

export default Navigation;
