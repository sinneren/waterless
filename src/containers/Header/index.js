import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import Header from '../../components/Header';

class HeaderContainer extends Component {
    render() {
        return (<Header username={this.props.state.auth.username} actions={this.props.actions} />)
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)