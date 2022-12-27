import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = function({dispatch , getState}){
  return function(next){
    return function(action){
      //middleware
      console.log('ACTION_TYPE' , action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);