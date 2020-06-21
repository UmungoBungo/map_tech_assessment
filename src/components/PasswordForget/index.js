import React, { Component } from 'react';
import { Link } from 'gatsby';
import FullTitleLogo from '../ImageRendering/full_title'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <>
                <div>
                    <FullTitleLogo />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold plain-text-color">
                        Reset account password
            </h2>
                </div>
                <form className="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                aria-label="Email address"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Email address"
                                onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="group relative w-full py-2 px-4 text-sm leading-5 font-medium rounded-md cta-button focus:shadow-outline-purple"
                            disabled={isInvalid}>
                            {isInvalid && <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-purple-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>}
                            Reset My Password
                        </button>
                    </div>
                    {error && <p>{error.message}</p>}
                </form>
            </>
        );
    }
}

const PasswordForgetLink = () => (
    <div className="flex items-center">
        <span className="ml-2 block text-sm leading-5">
            <Link to={ROUTES.PASSWORD_FORGET} className="link-text">
                Forgot your password?
            </Link>
        </span>
    </div>
);

export default withFirebase(PasswordForgetForm);

export { PasswordForgetLink };
