import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import News from '../containers/News';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <>
                <Route path="/" exact component={App} />
                <Route path="/news" component={News} />
                <Route path="/news:newsId" component={News} />
                <Route path="/news:newsId/edit" component={News} />
                <Route path="/login" component={App} />
            </>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;