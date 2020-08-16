import React, { Fragment } from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import PasswordChangeEmailBtn from '../components/PasswordForget/passwordEmailBtn';

const AccountPageBase = () => (
  <Fragment>
    <AuthUserContext.Consumer>
      {authUser => (
        <form>
          <div>
            <div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Profile
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
              <div class="mt-6 sm:mt-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="username" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    Username
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg flex rounded-md shadow-sm">
                      <input id="username" class="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={authUser.username}/>
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="about" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    About
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg flex rounded-md shadow-sm">
                      <textarea id="about" rows="3" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                  </div>
                </div>

                <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="photo" class="block text-sm leading-5 font-medium text-gray-700">
                    Photo
                  </label>
                  <div class="mt-2 sm:mt-0 sm:col-span-2">
                    <div class="flex items-center">
                      <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <span class="ml-5 rounded-md shadow-sm">
                        <button type="button" class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                          Change
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Personal Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div class="mt-6 sm:mt-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    First name
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input id="first_name" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    Last name
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input id="last_name" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                    Email address
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input id="email" type="email" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={authUser.email} />
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-5 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <PasswordChangeEmailBtn email={authUser.email}/>
                </div>
                
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-5">
            <div class="flex justify-end">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="button" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                  Cancel
                </button>
              </span>
              <span class="ml-3 inline-flex rounded-md shadow-sm">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Save
              </button>
              </span>
            </div>
          </div>
        </form> 
      )}
    </AuthUserContext.Consumer>
  </Fragment>
);

const condition = authUser => !!authUser;

const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPageBase);

export default () => (
  <Layout>
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <AccountPage />
      </div>
    </div>
  </Layout>
);
