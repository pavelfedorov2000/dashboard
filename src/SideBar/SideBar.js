import React from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import Manager from '../Manager/Manager';
import './Sidebar.scss';


function SideBar({ sidebar, toggleSidebar, closeBurger, setSidebar }) {

    return (
        <div className={sidebar ? 'sidebar hide' : 'sidebar'}>
            <button className="sidebar__close" type="button" onClick={closeBurger}>&times;</button>
            <div className="sidebar__top" style={sidebar ? { justifyContent: 'center' } : { justifyContent: 'space-between' }}>
                <Logo sidebar={sidebar} />
                <button style={sidebar ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0)' }} className="sidebar-toggler" type="button" aria-label={sidebar} onClick={toggleSidebar}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" fill="white" fillOpacity="0.5" />
                    </svg>
                </button>
            </div>
            <NavMenu setSidebar={setSidebar} sidebar={sidebar} />
            <Manager sidebar={sidebar} />
        </div>
    );
}

export default SideBar;