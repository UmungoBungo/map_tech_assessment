import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SignInForm from '../components/LoginManagement/signUserIn';

const SignInPage = () => (
  <Fragment>
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <SignInForm />
      </div>
    </div>
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
