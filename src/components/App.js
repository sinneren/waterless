import React, { Component } from 'react'
import Footer from './Footer';
import HeaderContainer from '../containers/Header';

export default class App extends Component {
    componentDidMount() {
        const _onInit = () => {
            console.log('gapi initialized')
        }
        const _onError = err => {
            console.log('error', err)
        }
        if (window.gapi.load !== undefined) {
            window.gapi.load('auth2', function() {
                window.gapi.auth2
                    .init({
                        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    })
                    .then(_onInit, _onError)
            })
        }
    }
    render() {
        return (
            <>
                <HeaderContainer />
                <main>{this.props.children}</main>
                <Footer />
            </>
        );
    }
};

