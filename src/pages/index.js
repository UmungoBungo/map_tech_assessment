import React, { Component } from 'react';
import Layout from '../components/layout';
import { withFirebase } from '../components/Firebase';
import StoreInfo from '../components/StoreInfo'

import Map from '../components/GoogleMap/map'

class LandingPage extends Component {
    _initFirebase = false;

    constructor(props) {
        super(props);

        this.state = {
            locations: []
        };
    }

    firebaseInit = () => {
        if (this.props.firebase && !this._initFirebase) {
            this._initFirebase = true;

            this.onRetrieveLocations();
        }
    };

    componentDidMount() {
        this.firebaseInit();
    }

    componentDidUpdate() {
        this.firebaseInit();
    }


    onRetrieveLocations() {
        this.props.firebase
            .locations()
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    let locations = [];
                    snapshot.forEach(doc =>
                        locations.push({ ...doc.data(), uid: doc.id }),
                    );

                    this.setState({
                        locations: locations,
                        loading: false,
                    });
                } else {
                    this.setState({ locations: null, loading: false });
                }
            });
    }

    render() {
        return (
            <Layout>
                <div className="relative site-background-color overflow-hidden">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex justify-center">
                            <h2 className="text-6xl leading-none tracking-tight font-extrabold text-gray-900 uppercase">
                                Store{" "}
                                <span className="text-orange-600">
                                    Locator
                            </span>
                            </h2>
                        </div>


                        <div className="mt-5 grid grid-cols-1 overflow-hidden lg:grid-cols-2">
                            <div className="relative z-10 pb-8 site-background-color sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                                <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />

                                <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                                    <StoreInfo />
                                </div>
                            </div>
                            <div className="px-4 lg:pr-8 lg:pl-0 w-full h-map lg:h-full">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withFirebase(LandingPage);
