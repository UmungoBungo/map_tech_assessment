import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    hours: '',
    address: '',
    validSelection: false
};


class StoreDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
        this.getSiteState = this.getSiteState.bind(this)
    }

    firebaseInit = () => {
        if (this.props.firebase) {

            if (this.props.selectedId)
                this.getSiteState()
            else
                this.setState({ ...INITIAL_STATE })
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
            .location(this.props.selectedId)
            .get()
            .then(doc => {
                if (doc.exists) {
                    const storeInfo = doc.data()
                    this.setState({
                        address: storeInfo.address,
                        hours: storeInfo.hours,
                        validSelection: true
                    })
                } else {
                    console.log("No such document!")
                }
            }).catch(function (error) {
                console.log("Error getting document:", error)
                this.setState({ ...INITIAL_STATE })
            })
    };

    render() {
        return (
            this.state.validSelection && <div>
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

