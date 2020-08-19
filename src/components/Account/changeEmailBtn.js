import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class ChangeEmailBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            emailChanged: false
        };
    }

    changeEmail = () => {
        this.props.firebase
            .doEmailUpdate(this.props.email)
            .then(() => {
                this.setState({
                    error: null,
                    emailChanged: true
                })
                window.location.reload()
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    render() {
        return (
            <div className="flex items-center">
                <span className="block text-sm leading-5">
                    <button
                        type="button"
                        onClick={this.changeEmail}
                        className="py-1 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                        Confirm Change?
                    </button>
                </span>
                {this.state.emailChanged && <span className="pl-2">
                    email changed!
                </span>}
            </div>
        );
    }
}

export default withFirebase(ChangeEmailBtn);

