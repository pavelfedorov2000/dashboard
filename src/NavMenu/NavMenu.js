import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { useLocation } from "react-router-dom";
import './NavMenu.scss';

function NavMenu({ sidebar, closeBurger, setSidebar }) {

    const [activeLink, setLink] = useState(false);
    const clickLink = () => {
        setLink(!activeLink);
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

    return (
        <nav className="nav-menu header__nav">
            <ul className="nav-menu__list">
                {
                    links.map((link, index) => (
                        <Link style={sidebar ? { justifyContent: 'center' } : { justifyContent: 'flex-start' }} click={clickLink} className={(activeLink || index === 0) ? 'nav-menu__item active' : 'nav-menu__item'} isActive={activeLink} key={`link-${index}`} to={generatePath(link)} onClick={closeBurger}>
                            <img className="nav-menu__icon" src={`img/icons/sidebar/${link}.svg`} alt={link} />
                            <span style={sidebar ? { display: 'none' } : { display: 'block' }} className="nav-menu__link">{link}</span>
                        </Link>
                    ))}
            </ul>
        </nav>
    );
}

export default NavMenu;