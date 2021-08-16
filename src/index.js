import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App.js';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore} from 'redux';
import users from './Reducer/users'
import nickname from './Reducer/nickname';
import {BrowserRouter} from 'react-router-dom'
//import applyMiddleware from './middleware/index'
import middleware from './middleware'
/*import reducers from './Reducer'

/*const mid=(store)=>(next)=>(action)=>{
console.log('action',action)
next(action)
}*/

const store=createStore(combineReducers(
  users,
  nickname,
),middleware);

console.log(store.getState())



ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter><App /></BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
