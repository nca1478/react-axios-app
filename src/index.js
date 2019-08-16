// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Styles
import './index.css';

// Components 
import App from './App';

// Service Worker (PWA)
import registerServiceWorker from './registerServiceWorker';

// Interceptors
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
