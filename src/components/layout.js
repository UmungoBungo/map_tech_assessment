import React, { Component, Fragment } from 'react';

import Navigation from './Navigation';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';

class Layout extends Component {
    state = {
        firebase: null,
    };

    componentDidMount() {
        const app = import('firebase/app');
        const auth = import('firebase/auth');
        const database = import('firebase/database');

        Promise.all([app, auth, database]).then(values => {
            const firebase = getFirebase(values[0]);

            this.setState({ firebase });
        });
    }

    render() {
        return (
            <div className="min-h-screen site-background-color">
                <FirebaseContext.Provider value={this.state.firebase}>
                    <AppWithAuthentication {...this.props} />
                </FirebaseContext.Provider>
            </div>
        );
    }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
    <Fragment >
        <Navigation />
        <hr />
        {children}
    </Fragment>
));

export default Layout;
