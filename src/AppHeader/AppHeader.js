import React, {
  Component
} from "react";
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import './AppHeader.scss';

function AppHeader({ switchTheme, openBurger }) {

  return (
    <header className="header">
      <div className="header__inner">
        <button className="burger-btn" type="button" onClick={openBurger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <HeaderSearch />
        <div className="header__actions actions-header">
          <select className="lang">
            <option>en</option>
            <option>ru</option>
          </select>
          <button className="actions-header__item theme-toggler" type="button" onClick={switchTheme}>
            <img src="img/icons/theme.svg" alt="theme" />
          </button>
          <button className="actions-header__item notifications" type="button">
            <img src="img/icons/bell.svg" alt="notifications" />
            <span></span>
          </button>
          <div className="actions-header__item user-avatar">
            <img src="img/avatar.svg" alt="user avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;