import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import AppHeader from '../AppHeader/AppHeader';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import AppHome from '../AppHome/AppHome';
import Comments from '../Comments/Comments';
import Extensions from '../Extensions/Extensions';
import NotFound from '../NotFound/NotFound';


function AppMain(props) {

  return (
    <div className="wrapper">
      <SideBar />
      <div className="page">
        <AppHeader />
        <main className="main">
          <Switch>
            <Route exact path="/" component={AppHome} />
            <Route path='/comments' component={Comments} />
            <Route path='/extensions' component={Extensions} />
            <Route path='/not-found' component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(AppMain);