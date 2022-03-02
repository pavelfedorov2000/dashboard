import React, { Component } from "react";
import './NavMenu.scss';

function NavMenu() {
  const links = [
    'dashboard', 'Posts', 'Categories', 'Media', 'Pages', 'Comments', 'Appearance', 'Extentions', 'Users', 'Settings',
  ];

  return (
    <nav className="nav-menu header__nav">
      <ul className="nav-menu__list">
        {
          links.map(link =>
            <li className="nav-menu__item">
              <a href="#" className="nav-menu__link">{link}</a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default NavMenu;