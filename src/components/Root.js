import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import App from './App';
import Err404 from './Err404';
import News from '../containers/News';
import history  from '../history';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={News} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/news:newsId" component={News} />
                    <Route exact path="/news:newsId/edit" component={News} />
                    <Route component={Err404} />
                </Switch>
            </App>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;