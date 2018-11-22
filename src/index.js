import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';
import Root from './components/Root';

import './style.css';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

render(<Root store={store} />, document.getElementById('root'));