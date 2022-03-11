import React from 'react';
import { useState } from 'react';
import {
  Route,
  Switch,
  useHistory,
  withRouter
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../Theme/Theme";
import AppHeader from '../AppHeader/AppHeader';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import AppHome from '../AppHome/AppHome';
import Comments from '../Comments/Comments';
import Extentions from '../Extentions/Extentions';
import NotFound from '../NotFound/NotFound';


function AppMain() {

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  const openBurger = () => {
    setSidebar(!sidebar);
  }

  const links = ['dashboard', 'extentions', 'comments', 'posts', 'categories', 'media', 'pages', 'appearance', 'users', 'settings'];

  function generatePath(item) {
    switch (item) {
      case 'dashboard':
        return '/';
      case 'comments':
        return 'comments';
      case 'extentions':
        return 'extentions';
      default:
        return 'not-found';
    }
  }

  let history = useHistory();

  const closeBurger = () => {
    setSidebar(!sidebar);
    history.push('/');
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={sidebar ? 'wrapper _lock' : 'wrapper'}>
        <SideBar links={links} sidebar={sidebar} toggleSidebar={toggleSidebar} closeBurger={closeBurger} />
        <div className={sidebar ? 'page wide' : 'page'}>
          <AppHeader openBurger={openBurger} switchTheme={switchTheme} />
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
    </ThemeProvider>
  );
}

export default withRouter(AppMain);