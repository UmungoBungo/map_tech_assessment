import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class StoreDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: '',
            address: ''
        }
        this.getSiteState = this.getSiteState.bind(this)
    }

    firebaseInit = () => {
        if (this.props.firebase && !this._initFirebase) {
            this._initFirebase = true;

            this.getSiteState();
        }
    };

    componentDidMount() {
        this.firebaseInit();
    }

    componentDidUpdate() {
        this.firebaseInit();
    }

    getSiteState = () => {
        this.props.firebase
            .location("4FVF0EJ7immt4fN07LkX")
            .get()
            .then(doc => {
                if (doc.exists) {
                    const storeInfo = doc.data()
                    this.setState({
                        address: storeInfo.address,
                        hours: storeInfo.hours
                    })
                } else {
                    console.log("No such document!")
                }
            }).catch(function (error) {
                console.log("Error getting document:", error)
            })
    };

    render() {
        return (
            <div>
                <div className="font-normal">
                    ADDRESS:
                </div>
                <div className="font-bold text-xl">
                    {this.state.address}
                </div>
                <div className="font-normal mt-4">
                    HOURS:
                </div>
                <div className="font-bold text-xl">
                {this.state.hours}
                </div>
            </div>
        );
    }
}

export default withFirebase(StoreDetails);

