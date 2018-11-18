import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions  from '../actions/auth';
import history from "../history";

class Login extends Component {
    componentDidMount() {
        document.title = 'Авторизация';

        if (!this.props.state.auth.username) {
            if (window.gapi.auth2 !== undefined) {
                this.props.actions.startingAuthWithGA();

                const auth2 = window.gapi.auth2.getAuthInstance();

                auth2.signIn()
                    .then(googleUser => {
                        const profile = googleUser.getBasicProfile();
                        this.props.actions.authWithGA(profile.getName());
                    })
                    .catch(err => {
                        console.info(err);
                    })
            }
        } else {
            history.push("/");
        }
    }
    render() {
        return (
            <>
                <h1>Авторизация</h1>
            </>
        );
    }
};
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
