import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/news';
import NewsDetail from '../../components/NewsDetail';
import history from "../../history";

class NewsDetailContainer extends Component {
    renderNewsDetail = (feed) => {
        if (feed) {
            return <NewsDetail
                title={feed.title}
                creator={feed.creator.displayName}
                date={feed.createDate}
                content={feed.content}
            />
        }
    }
    componentDidMount() {
        this.props.actions.getNewsByID(this.props.match.params.newsId);
    }
    componentDidUpdate() {
        if (this.props.state.news.status === 404) {
            history.push('/404');
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