import React, { Fragment, useState } from 'react';
import { compose } from 'recompose';
import SignOutButton from '../components/LoginManagement/signUserOut';
import Layout from '../components/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import PasswordChangeEmailBtn from '../components/account/passwordEmailBtn';
import ChangeEmailBtn from '../components/account/changeEmailBtn';

function AccountPageBase() {

  const [emailChanged, setEmailChanged] = useState(false);
  const [updatedEmail, setUpdatedEmail] = useState('');

  return (
    <Fragment>
      <AuthUserContext.Consumer>
        {authUser => (
          <form>
            <div>
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile
                </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                </p>
                </div>
                <div className="mt-6 sm:mt-5">
                  <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                      Username
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm sm:max-w-xs">
                        <input id="username" className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" defaultValue={authUser.username} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="photo" className="block text-sm leading-5 font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="flex items-center">
                        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <span className="ml-5 rounded-md shadow-sm">
                        {/* <input type="file" className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"/> */}
                          <button type="file" className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                            Change
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Account
                </h3>
                </div>
                <div className="mt-6 sm:mt-5">

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                      Email address
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                        <input
                          id="email"
                          type="email"
                          className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          defaultValue={authUser.email}
                          onChange={(e) => {
                            setEmailChanged(e.target.value !== authUser.email)
                            setUpdatedEmail(e.target.value)}
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-1 sm:mt-0 sm:col-span-1 flex justify-end">
                      {emailChanged &&
                        <ChangeEmailBtn email={updatedEmail}/>
                      }
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 justify-start">
                    <PasswordChangeEmailBtn email={authUser.email} />
                  </div>

                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-5">
              <div className="flex justify-end">
                <span className="ml-3 inline-flex rounded-md shadow-sm">
                  <SignOutButton />
                </span>
              </div>
            </div>
          </form>
        )}
      </AuthUserContext.Consumer>
    </Fragment>
  )
};

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
