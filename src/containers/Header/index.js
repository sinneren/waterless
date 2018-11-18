import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {authWithGA} from '../../actions/auth';
import Header from '../../components/Header';

class HeaderContainer extends Component {
    render() {
        return (<Header actions={this.props.actions} />)
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authWithGA, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)