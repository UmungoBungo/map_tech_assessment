import React from 'react';
import { Link } from 'gatsby';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <Link onClick={firebase ? firebase.doSignOut : () => {}} className="block px-4 py-2 text-sm uppercase leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Sign Out</Link>
//   <button
//     type="button"
//     onClick={firebase ? firebase.doSignOut : () => {}}
//   >
//     Sign Out
//   </button>
);

export default withFirebase(SignOutButton);
