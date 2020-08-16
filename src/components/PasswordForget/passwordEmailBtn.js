import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class PasswordChangeEmailBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            emailSent: false
        };
    }

    sendPasswordResetEmail = () => {
        this.props.firebase
            .doPasswordReset(this.props.email)
            .then(() => {
                this.setState({
                    error: null,
                    emailSent: true
                })
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    render() {
        return (
            <div className="flex items-center justify-end">
                {this.state.emailSent && <span className="pr-2">
                    email sent!
                </span>}
                <span className="block text-sm leading-5">
                    <button
                        type="button"
                        onClick={this.sendPasswordResetEmail}
                        className="group relative w-full py-2 px-4 text-sm leading-5 font-medium rounded-md cta-button focus:shadow-outline-purple">
                        Send Password Reset Email
                    </button>
                </span>
            </div>
        );
    }
}

export default withFirebase(PasswordChangeEmailBtn);

