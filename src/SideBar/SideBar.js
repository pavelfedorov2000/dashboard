import React from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import Manager from '../Manager/Manager';
import './Sidebar.scss';

function SideBar(props) {
  return (
    <div className="sidebar">
      <Logo />
      <NavMenu />
      <Manager />
    </div>
  );
}

export default SideBar;