import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import FullTitleLogo from '../ImageRendering/full_title'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

// const ERROR_CODE_ACCOUNT_EXISTS =
//     'auth/account-exists-with-different-credential';

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                navigate(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <>
                <div>
                    <FullTitleLogo />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-300">
                        Sign in to your account
            </h2>
                </div>
                <form className="mt-8" onSubmit={this.onSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                aria-label="Email address"
                                name="email"
                                type="email"
                                autoComplete="username"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Email address"
                                onChange={this.onChange} />
                        </div>
                        <div className="-mt-px">
                            <input
                                aria-label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Password"
                                onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center">
                        <SignUpLink />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition duration-150 ease-in-out"
                            disabled={isInvalid}
                            type="submit">
                            {isInvalid && <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>}
                            Sign in
                        </button>
                        {error && <p className="ml-2 block text-sm leading-5 text-gray-300">{error.message}</p>}
                    </div>
                    <div className="mt-6 flex items-center">
                        <PasswordForgetLink />
                    </div>
                </form>
            </>
        );
    }
}

const SignInForm = withFirebase(SignInFormBase);

export default SignInForm;
