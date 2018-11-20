import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/news';
import NewsItem from '../../components/NewsItem';

class News extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete = (id) => {
        this.props.actions.deleteNewsById(id, this.props.state.auth.token);
    }
    renderNewsItems = (feeds) => {
        return feeds.map(item => {
            return <NewsItem 
                key={item._id} 
                id={item._id} 
                createDate={item.createDate} 
                creator={item.creator} 
                title={item.title} 
                content={item.content}
                actionDelete={this.handleDelete}
            />
        })
    }
    componentDidMount () {
        this.props.actions.getNews();
    }
    render() {
        return (
            <>
                {this.renderNewsItems(this.props.state.news.feed_list)}
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