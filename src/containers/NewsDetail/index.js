import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import * as newsActions from '../../actions/news';
import history from "../../history";
import NewsItem from '../../components/NewsItem';

class NewsDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            user_id: null,
        }
    }
    handleDelete = (id) => {
        this.props.actions.deleteNewsById(id, this.props.state.auth.token);
    }
    renderNewsDetail = (feed) => {
        if (feed) {
            return <NewsItem
                id={feed._id}
                createDate={feed.createDate}
                creator={feed.creator}
                title={feed.title}
                content={feed.content}
                actionDelete={this.handleDelete}
                editable={(feed.creator._id === this.state.user_id) ? 'editable' : ''}
                detail
            />
        }
    }
    componentDidMount() {
        this.props.actions.getNewsByID(this.props.match.params.newsId);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.state.news.status === 404) {
            history.push('/404');
        }
        if (prevState.user_id === null && this.props.state.auth.token !== null) {
            this.setState({ user_id: jwt.decode(this.props.state.auth.token).id })
        }
    }
    render() {
        return (
            <>
                {this.renderNewsDetail(this.props.state.news.feed_item)}
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        state,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(newsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer)