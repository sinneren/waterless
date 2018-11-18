import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    const signIn = (event) => {
        event.preventDefault();

        if (window.gapi !== undefined) {
            props.actions.startingAuthWithGA();

            const auth2 = window.gapi.auth2.getAuthInstance();

            auth2.signIn()
                .then(googleUser => {
                    const profile = googleUser.getBasicProfile();
                    props.actions.authWithGA(profile.getName());
                })
                .catch(err => {
                    props.actions.errorAuthGA(err.error);
                })
        }
    }
    const signOut = (event) => {
        event.preventDefault();

        if (window.gapi !== undefined) {
            const auth2 = window.gapi.auth2.getAuthInstance();

            auth2.signOut()
                .then(() => {
                    props.actions.signOutWithGA();
                })
                .catch(err => {
                    props.actions.errorAuthGA(err.error);
                })
        }
    }
    return (
        <header>
            <Link to="/">Главная</Link>
            {(!props.username) && <Link to="/login" onClick={signIn}>Войти</Link>}
            {(!!props.username) && <span>{props.username}</span>}
            {(!!props.username) && <Link to="/logout" onClick={signOut}>Выйти</Link>}
        </header>
    )
}

export default Header;