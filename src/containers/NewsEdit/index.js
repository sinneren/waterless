import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/news';
import NewsEdit from '../../components/NewsEdit';

class NewsEditContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
    }
    handleSave = (data) => {
        this.props.actions.editNewById(this.props.state.news.feed_item._id, this.props.state.auth.token, data);
    }
    componentDidMount() {
        this.props.actions.getNewsByID(this.props.match.params.newsId);
    }
    render() {
        let renderEdit = <></>;
        if (this.props.state.news.feed_item) {
            renderEdit = <NewsEdit details={this.props.state.news.feed_item} saveAction={this.handleSave} />
        }
        return (
            <>
                {renderEdit}
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(newsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsEditContainer)