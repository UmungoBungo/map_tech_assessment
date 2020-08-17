import React from 'react';
import { Link } from 'gatsby';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button
        type="button"
        onClick={firebase ? firebase.doSignOut : () => { }}
        className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
    >
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);
