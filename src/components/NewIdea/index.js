import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { AuthUserContext } from '../Session';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import FullTitleLogo from '../ImageRendering/full_title'

const INITIAL_STATE = {
    ideaTitle: '',
    tldr: '',
    described: '',
    error: null,
};

class NewIdeaFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = authUser => event => {
        console.log('breakpoint')
        const { ideaTitle, tldr, described } = this.state;

        this.props.firebase.ideas().add({
            userId: authUser.uid,
            title: ideaTitle,
            tldr: tldr,
            described: described,
            createdAt: this.props.firebase.timestamp(),
        })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                navigate(
                    ROUTES.PREBUILD_IDEA,
                    {
                        state: { idea: {
                            title: ideaTitle,
                            tldr: tldr,
                            described: described
                        } },
                    }
                    );
            }).catch(error => {
                console.error("Error adding document: ", error);
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { error } = this.state;


        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <>
                        <div>
                            <FullTitleLogo />
                            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold plain-text-color">
                                Submit your dream game idea
                            </h2>
                        </div>

                        <form onSubmit={this.onSubmit(authUser)}>
                            <div className="mt-6 sm:mt-5">
                                <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="ideaTitle" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                        Title
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                            <input
                                                id="ideaTitle"
                                                name="ideaTitle"
                                                required
                                                className="flex-1 form-input block w-full min-w-0 p-1 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="tldr" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                        Short Description
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                            <textarea
                                                id="tldr"
                                                name="tldr"
                                                required
                                                rows="2"
                                                className="form-textarea block w-full p-1 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                onChange={this.onChange} />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            What people see first, 100 word limit.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="described" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                        Long Description
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                            <textarea
                                                id="described"
                                                name="described"
                                                rows="4"
                                                className="form-textarea block w-full p-1 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                onChange={this.onChange} />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            More detail (if needed), focus on the mechanic, not on story!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button type="submit"
                                    className="relative py-2 px-4 text-sm leading-5 font-medium rounded-md cta-button focus:shadow-outline-purple"
                                >
                                    Submit
                                </button>
                                {error && <p className="ml-2 block text-sm leading-5 plain-text-color">{error.message}</p>}
                            </div>
                        </form>
                    </>
                )}
            </AuthUserContext.Consumer>
        );
    }
}


const NewIdeaForm = withFirebase(NewIdeaFormBase);

export default NewIdeaForm;