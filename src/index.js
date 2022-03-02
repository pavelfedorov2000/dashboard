import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom"
import './base/_general.scss';
import App from './App'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root')
);
