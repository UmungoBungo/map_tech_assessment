import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    hours: '',
    address: '',
    validSelection: false,
    UID: '7tGnutvf3BtbiZuRPk38'
};


class StoreDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
        this.getSiteState = this.getSiteState.bind(this)
    }

    firebaseInit = () => {
        if (this.props.firebase && !this._initFirebase) {
            this._initFirebase = true

            this.getStorePreference()

            if (this.props.selectedId)
                this.getSiteState()
            else
                this.setState({ ...INITIAL_STATE })
        }
    };

    componentDidMount() {
        this.firebaseInit();
    }

    componentDidUpdate(prevProps) {
        if ((this.props.selectedId !== prevProps.selectedId) && this.props.selectedId) {
            this.getSiteState()
        }
        this.firebaseInit();
    }

    getStorePreference = () => {
        this.props.firebase
            .user(this.state.UID)
            .get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        storePreference: doc.data().store_preference
                    })
                } else {
                    console.log('No such document!')
                }
            }).catch(function (error) {
                console.log('Error getting document:', error)
            })
    };

    onStorePrefChange = event => {
        this.props.firebase
            .user(this.state.UID)
            .update({
                store_preference: event.currentTarget.value
            }).then(this.getStorePreference)
            .catch(function (error) {
                console.log('Error updating document:', error)
            })
    };

    getSiteState = () => {
        this.props.firebase
            .location(this.props.selectedId)
            .get()
            .then(doc => {
                if (doc.exists) {
                    const storeInfo = doc.data()
                    this.setState({
                        storeId: doc.id,
                        address: storeInfo.address,
                        hours: storeInfo.hours,
                        days: storeInfo.days,
                        validSelection: true
                    })
                } else {
                    console.log('No such document!')
                }
            }).catch(function (error) {
                console.log('Error getting document:', error)
                this.setState({ ...INITIAL_STATE })
            })
    };

    render() {
        return (
            this.state.validSelection && <div>
                <div className='font-normal'>
                    ADDRESS:
                </div>
                <div className='font-bold text-lg sm:text-xl'>
                    {this.state.address}
                </div>
                <div className='font-normal mt-4 text-sm sm:text-base'>
                    HOURS:
                </div>
                <div className='font-bold text-lg sm:text-xl'>
                    {this.state.hours}
                </div>
                <div className='font-normal mt-4 text-sm sm:text-base'>
                    DAYS:
                </div>
                <div className='font-bold text-lg sm:text-xl'>
                    {this.state.days}
                </div>
                {(this.state.storeId === this.state.storePreference) && <div className='flex justify-end font-light text-md sm:text-lg'>
                    <svg class='w-6 h-6 fill-current text-yellow-400' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    Favourite
                </div>}
                {(this.state.storeId !== this.state.storePreference) && <div className='flex justify-end font-light text-md sm:text-lg'>
                    <button
                        className='flex border-solid border-b-2 border-gray-600'
                        value={this.state.storeId}
                        onClick={this.onStorePrefChange}>
                        <svg class='w-6 h-6 fill-current text-gray-400' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                        Set store as favourite?
                    </button>
                </div>}
            </div>
        );
    }
}

export default withFirebase(StoreDetails);

