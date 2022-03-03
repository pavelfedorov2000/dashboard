import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './base/_general.scss';
import AppMain from './AppMain/AppMain';

ReactDOM.render((
  <Router>
    <AppMain />
  </Router>
), document.getElementById('root')
);