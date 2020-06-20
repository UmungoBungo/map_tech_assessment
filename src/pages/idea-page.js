import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import * as ROUTES from '../constants/routes';
import Layout from '../components/layout';

const IdeaPage = (title) => (
    <Fragment>
        <section className="text-gray-400 body-font">
            <div className="flex items-center justify-center py-12 px-0 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full">
                    <div>
                        <h2 class="text-2xl text-center leading-6 font-medium text-gray-900">
                            'props.title'
                        </h2>
                    </div>
                    <div class="mt-5 border-t border-gray-200 pt-5">
                        <dl>
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt class="text-md leading-5 uppercase font-medium text-teal-400">
                                    Amount pledged
                                </dt>
                                <dd class="mt-1 text-md leading-5 font-medium text-teal-400 sm:mt-0 sm:col-span-2">
                                    'props.pledged'
                                </dd>
                            </div>
                            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <dt class="text-sm leading-5 font-medium uppercase text-gray-500">
                                    TLDR
                                </dt>
                                <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                'props.short'
                                </dd>
                            </div>
                            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <dt class="text-sm leading-5 font-medium uppercase text-gray-500">
                                    Details
                                </dt>
                                <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>


                            {/* <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <div/>
                                <div/>
                                <Link to={ROUTES.SIGN_UP} className="ml-4 px-3 py-2 rounded-md text-sm font-medium uppercase leading-5 cta-button focus:shadow-outline-purple">Pledge</Link>
                            </div> */}
                        </dl>
                    </div>
                    <div class="mt-8 flex justify-end">
                        <Link to={ROUTES.SIGN_UP} className="px-3 py-2 mr-8 sm:mr-0 rounded-md text-sm font-medium uppercase leading-5 cta-button focus:shadow-outline-purple">Pledge</Link>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
);

export default () => (
    <Layout>
        <IdeaPage />
    </Layout>
);
