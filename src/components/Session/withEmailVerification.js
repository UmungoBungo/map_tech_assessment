import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isSent: false
      };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <div>
                {this.state.isSent ? (
                  <p>
                    Email confirmation sent: Check your emails (Spam folder included) for a confirmation email. Refresh this page once you have confirmed your email.
                  </p>
                ) : (
                    <p>
                      Verify your email: Check your emails (Spam folder included) for a confirmation email or send another confirmation email.
                    </p>
                  )}

                <div className="flex justify-center mt-5">
                  <button
                    type="button"
                    onClick={this.onSendEmailVerification}
                    disabled={this.state.isSent}
                    className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                  >
                    Re-send confirmation email
                </button>
                </div>

                <div className="mt-10">
                  <p>
                    Accidently changed your account email address? Check your previously used email address for instructions on reverting it back.
                  </p>
                </div>
              </div>
            ) : (
                <Component {...this.props} />
              )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
