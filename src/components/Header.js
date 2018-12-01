import React from 'react';
import { Link } from "react-router-dom";

const headerStyles = {
    headerStyle: {
        width: '100%',
        flexShrink: '0',
        backgroundColor: '#24292e',
        color: 'hsla(0, 0 %, 100 %, .75)',
        paddingBottom: '12px',
        paddingTop: '12px',
    },
    navStyle: {
        justifyContent: 'space-between',
        alignItems: 'middle'
    },
    navTitle: {
        color: '#FFF',
        marginRight: '10px'
    },
    navLink: {
        fontSize: '14px',
        color: 'cadetblue'
    }

}
const Header = props => {
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
        <header style={headerStyles.headerStyle}>
            <div className="container" style={headerStyles.navStyle}>
                <Link to="/" style={headerStyles.navLink}>Главная</Link>
                <div>
                    {(!props.username) && 
                        <>
                            <Link to="/" style={headerStyles.navLink} onClick={signIn}>Войти через GA</Link>
                            <span>&nbsp;|&nbsp;</span>
                            <Link to="/login" style={headerStyles.navLink}>Войти</Link>
                            <span>&nbsp;|&nbsp;</span>
                            <Link to="/signup" style={headerStyles.navLink}>Регистрация</Link>
                        </>
                    }
                    {(!!props.username) && 
                        <>
                            <span style={headerStyles.navTitle}>{props.username}</span>
                            <Link to="/logout"  style={headerStyles.navLink} onClick={signOut}>Выйти</Link>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;