import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App.js';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import reducers from './reducers'
import {BrowserRouter} from 'react-router-dom'
import middleware from './middleware'


/*const mid=(store)=>(next)=>(action)=>{
console.log('action',action)
next(action)
}*/

const store=createStore(reducers, middleware);

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
