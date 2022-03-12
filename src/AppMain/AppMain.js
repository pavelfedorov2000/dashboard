import React from 'react';
import { useState, useEffect } from 'react';
import {
    Route,
    Switch,
    useLocation,
    withRouter,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
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

    const closeBurger = () => {
        setSidebar(!sidebar);
    }

    const { pathname } = useLocation();

    useEffect(() => {
        setSidebar(false);
    }, [pathname]);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className={sidebar ? 'wrapper _lock' : 'wrapper'}>
                <SideBar sidebar={sidebar} toggleSidebar={toggleSidebar} closeBurger={closeBurger} />
                <div className={sidebar ? 'page wide' : 'page'}>
                    <AppHeader openBurger={openBurger} switchTheme={switchTheme} />
                    <main className="main">
                        <Switch history={createBrowserHistory}>
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