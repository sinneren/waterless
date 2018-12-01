import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import App from './App';
import Err404 from './Err404';
import News from '../containers/News';
import NewsEditContainer from '../containers/NewsEdit';
import NewsDetailContainer from '../containers/NewsDetail';
import SignUpContainer from '../containers/SignUp';
import LogInContainer from '../containers/LogIn';
import history  from '../history';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={News} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/news/:newsId" component={NewsDetailContainer} />
                    <Route exact path="/news/:newsId/edit" component={NewsEditContainer} />
                    <Route exact path="/signup" component={SignUpContainer} />
                    <Route exact path="/login" component={LogInContainer} />
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