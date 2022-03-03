import React, { Component } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom"
import './NavMenu.scss';

function NavMenu() {
  const links = [
    'dashboard', 'posts', 'categories', 'media', 'pages', 'comments', 'appearance', 'extentions', 'users', 'settings',
  ];


  const [activeLink, setLink] = useState(false);
  const clickLink = () => {
    setLink(!activeLink);
  }

  function genegatePath(item) {
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

  return (
    <nav className="nav-menu header__nav">
      <ul className="nav-menu__list">
        {
          links.map((link, index) => (
            <Link click={clickLink} className={(activeLink || index === 0) ? 'nav-menu__item active' : 'nav-menu__item'} isActive={activeLink} key={`link-${index}`} to={genegatePath(link)}>
              <img className="nav-menu__icon" src={`img/icons/sidebar/${link}.svg`} alt={link} />
              <span className="nav-menu__link">{link}</span>
            </Link>
          ))}
      </ul>
    </nav>
  );
}

export default NavMenu;