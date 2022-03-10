import React, { Component } from "react";
import { useState } from 'react';
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
import Extentions from '../Extentions/Extentions';
import NotFound from '../NotFound/NotFound';


function AppMain(props) {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="wrapper">
      <SideBar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <div className="page">
        <AppHeader />
        <main className="main">
          <Switch>
            <Route exact path="/" component={AppHome} />
            <Route path='/comments' component={Comments} />
            <Route path='/extentions' component={Extentions} />
            <Route path='/not-found' component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(AppMain);