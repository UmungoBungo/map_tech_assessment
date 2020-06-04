import React, { Fragment } from 'react';

import Layout from '../components/layout';
import NewIdeaForm from '../components/NewIdea';

const NewIdeaPage = () => (
  <Fragment>
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <NewIdeaForm />
      </div>
    </div>
  </Fragment>
);

export default () => (
  <Layout>
    <NewIdeaPage />
  </Layout>
);
