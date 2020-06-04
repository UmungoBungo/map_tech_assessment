import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import FullTitleLogo from '../ImageRendering/full_title'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead.
`;

class NewIdeaFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        const roles = {};

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email
                });
            })
            .then(() => {
                return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                navigate(ROUTES.LANDING);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <>
                <div>
                    <FullTitleLogo />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold plain-text-color">
                        Submit your dream game idea
            </h2>
                </div>
                <form className="mt-8" onSubmit={this.onSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                aria-label="username"
                                name="username"
                                type="text"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Username"
                                onChange={this.onChange} />
                        </div>
                        <div className="-mt-px">
                            <input
                                aria-label="Email"
                                name="email"
                                type="email"
                                autoComplete="username"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Email Address"
                                onChange={this.onChange} />
                        </div>
                        <div className="-mt-px">
                            <input
                                aria-label="Password"
                                name="passwordOne"
                                type="password"
                                autoComplete="new-password"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Password"
                                onChange={this.onChange} />
                        </div>
                        <div className="-mt-px">
                            <input
                                aria-label="Confirm Password"
                                name="passwordTwo"
                                type="password"
                                autoComplete="new-password"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Confirm Password"
                                onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="relative w-full flex justify-center py-2 px-4 text-sm leading-5 font-medium rounded-md cta-button focus:shadow-outline-purple"
                            disabled={isInvalid}
                            type="submit">
                            {isInvalid && <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-purple-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>}
                            Sign up
                        </button>
                        {error && <p className="ml-2 block text-sm leading-5 plain-text-color">{error.message}</p>}
                    </div>
                </form>
            </>
        );
    }
}

const SignUpLink = () => (
    <div className="flex items-center">
        <label className="ml-2 block text-sm leading-5 plain-text-color">
            {"Don't have an account? "}
            <Link to={ROUTES.SIGN_UP} className="link-text">
                Sign Up
            </Link>
        </label>
    </div>
);

export default withFirebase(NewIdeaFormBase);

export { SignUpLink };
