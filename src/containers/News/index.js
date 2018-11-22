import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwt  from 'jsonwebtoken';
import * as newsActions from '../../actions/news';
import NewsItem from '../../components/NewsItem';

class News extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            user_id: null,
            feed: []
        }
    }

    handleDelete = (id) => {
        this.props.actions.deleteNewsById(id, this.props.state.auth.token);
        this.props.state.news.feed_list = this.props.state.news.feed_list.filter((item) => {
            return item._id !== id;
        });
    }
    componentDidMount () {
        this.props.actions.getNews();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.user_id === null && this.props.state.auth.token !== null) {
            this.setState({user_id: jwt.decode(this.props.state.auth.token).id})
        }
        
    }
    render() {
        return (
            <>
                {this.props.state.news.feed_list.map(item =>
                    <NewsItem
                        key={item._id}
                        id={item._id}
                        createDate={item.createDate}
                        creator={item.creator}
                        title={item.title}
                        content={item.content}
                        actionDelete={this.handleDelete}
                        editable={(item.creator._id === this.state.user_id) ? 'editable' : ''}
                    />
                )}
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
export default connect(mapStateToProps, mapDispatchToProps)(News)