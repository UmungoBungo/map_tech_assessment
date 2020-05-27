import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SignUpForm from '../components/SignUp';

const SignUpPage = () => (
  <Fragment>
    <div class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <SignUpForm />
      </div>
    </div>
  </Fragment>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
