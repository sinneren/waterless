import React, { Component } from 'react';
import Footer from './Footer';
import HeaderContainer from '../containers/Header';

const mainStyle= {
    padding: '10px 0',
    flexGrow: '1',
    flexShrink: '0',
}
const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100%',
}
export default class App extends Component {
    componentDidMount() {
        const _onInit = () => {
            console.log('gapi initialized')
        }
        const _onError = err => {
            console.log('error', err)
        }
        if (window.gapi !== undefined) {
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
                <main style={mainStyle}>
                    <div className="container" style={mainContainerStyle}>
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </>
        );
    }
};

