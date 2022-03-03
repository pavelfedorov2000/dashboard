import React, {
  Component
} from "react";
import { useState } from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import './AppHeader.scss';

function AppHeader() {

  return (
    <header className="header">
      <div className="header__inner">
        <HeaderSearch />
        <div className="header__actions actions-header">
          <select className="lang">
            <option>en</option>
            <option>ru</option>
          </select>
          <button className="actions-header__item theme-toggler" type="button">
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