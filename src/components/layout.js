import React, { Component } from 'react'

import getFirebase, { FirebaseContext } from './Firebase'

class Layout extends Component {
    state = {
        firebase: null,
    }

    componentDidMount() {
        const app = import('firebase/app')
        const database = import('firebase/firestore')

        Promise.all([app, database]).then(values => {
            const firebase = getFirebase(values[0])
            this.setState({ firebase })
        })
    }

    render() {
        return (
            <div className="min-h-screen site-background-color">
                <FirebaseContext.Provider value={this.state.firebase}>
                    {this.props.children}
                </FirebaseContext.Provider>
            </div>
        )
    }
}

export default Layout
