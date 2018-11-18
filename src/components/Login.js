import React, { Component } from 'react'

export default class Login extends Component {
    componentDidMount() {
        const auth2 = window.gapi.auth2.getAuthInstance();

        auth2.signIn()
            .then(googleUser => {
                const profile = googleUser.getBasicProfile()
                console.log('Full Name: ' + profile.getName())
                const id_token = googleUser.getAuthResponse().id_token
                console.log('ID Token: ' + id_token)
            })
            .catch(err => {
                console.info(err);
            })
    }
    render() {
        return (
            <>
                <h1>Авторизация</h1>
            </>
        );
    }
};
