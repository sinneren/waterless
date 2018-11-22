import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
    const headerStyle = {
        width: '100%',
        flexShrink: '0',
        backgroundColor: '#24292e',
        color: 'hsla(0, 0 %, 100 %, .75)',
        paddingBottom: '12px',
        paddingTop: '12px',
    }
    const navStyle = {
        justifyContent: 'space-between',
        alignItems: 'middle'
    }
    const signIn = (event) => {
        event.preventDefault();

        if (window.gapi.auth2 !== undefined) {
            props.actions.startingAuthWithGA();

            const auth2 = window.gapi.auth2.getAuthInstance();

            auth2.signIn()
                .then(googleUser => {
                    const profile = googleUser.getBasicProfile();
                    const id_token = googleUser.getAuthResponse().id_token;
                    props.actions.authWithGA(profile.getName(), id_token);
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
        <header style={headerStyle}>
            <div className="container" style={navStyle}>
                <Link to="/" className="nav-link">Главная</Link>
                <div>
                    {(!props.username) && <Link to="/login" className="nav-link" onClick={signIn}>Войти</Link>}
                    {(!!props.username) && <span>{props.username}</span>}
                    {(!!props.username) && <Link to="/logout" className="nav-link" onClick={signOut}>Выйти</Link>}
                </div>
            </div>
        </header>
    )
}

export default Header;