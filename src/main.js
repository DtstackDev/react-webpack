import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer';
import App from './App';
const store=createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
)
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)