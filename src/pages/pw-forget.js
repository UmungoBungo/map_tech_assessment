import React, { Fragment } from 'react';

import Layout from '../components/layout';
import PasswordForgetForm from '../components/Account/passwordForget';

const PasswordForgetPage = () => (
  <Fragment>
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <PasswordForgetForm />
      </div>
    </div>
  </Fragment>
);

export default () => (
  <Layout>
    <PasswordForgetPage />
  </Layout>
);
