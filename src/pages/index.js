import React, { Fragment } from 'react';

import Layout from '../components/layout';

const LandingPage = () => (
    <Fragment>
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold plain-text-color">Landing</h1>
        </div>
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <p className="ml-2 block text-sm leading-5 plain-text-color">
                The Landing Page is open to everyone, even though the user isn't
                signed in.
            </p>
        </div>
    </Fragment>
);

export default () => (
    <Layout>
        <LandingPage />
    </Layout>
);
