import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import AppHeader from './AppHeader/AppHeader';
import Footer from './Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/comments' component={Comments} />
        <Route path='/extensions' component={Extensions} />
        <Route path='/not-found' component={NotFound} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

export default withRouter(App)