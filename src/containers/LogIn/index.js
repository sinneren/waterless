import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import LogIn from '../../components/LogIn';

class LogInContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.state = {
            afterSaving: null,
        }
    }
    handleSave = (data, cb) => {
        this.props.actions.logIn(data);
        this.setState({
            afterSaving: cb,
        });
    }
    componentDidUpdate() {
        if (this.state.afterSaving) {
            this.state.afterSaving();
        }
    }
    render() {
        return (<LogIn saveAction={this.handleSave} />)
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer)