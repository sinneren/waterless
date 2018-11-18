import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Err404 from './Err404';
import Login from './Login';
import News from '../containers/News';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={News} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/news:newsId" component={News} />
                    <Route exact path="/news:newsId/edit" component={News} />
                    <Route exact path="/login" component={Login} />
                    <Route component={Err404} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;