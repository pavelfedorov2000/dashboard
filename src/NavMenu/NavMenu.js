import React from 'react';
import { useState } from 'react';
//import { Redirect } from "react-router-dom";
import './NavMenu.scss';

function NavMenu({ links, sidebar, closeBurger }) {

  const [activeLink, setLink] = useState(false);
  const clickLink = () => {
    setLink(!activeLink);
  }

  return (
    <nav className="nav-menu header__nav">
      <ul className="nav-menu__list">
        {
          links.map((link, index) => (
            <button style={sidebar ? { justifyContent: 'center' } : { justifyContent: 'flex-start' }} click={clickLink} className={(activeLink || index === 0) ? 'nav-menu__item active' : 'nav-menu__item'} isActive={activeLink} key={`link-${index}`} onClick={closeBurger}>
              <img className="nav-menu__icon" src={`img/icons/sidebar/${link}.svg`} alt={link} />
              <span style={sidebar ? { display: 'none' } : { display: 'block' }} className="nav-menu__link">{link}</span>
            </button>
          ))}
      </ul>
    </nav>
  );
}

export default NavMenu;