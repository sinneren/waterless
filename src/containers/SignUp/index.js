import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.state = {
            afterSaving: null,
        }
    }
    handleSave = (data, cb) => {
        console.log(data)
        this.props.actions.signUp(data);
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
        return (<SignUp saveAction={this.handleSave} />)
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)