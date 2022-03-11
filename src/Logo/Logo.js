import React from 'react';
import './Logo.scss';

function Logo({ sidebar }) {
  return (
    <a style={sidebar ? { display: 'none' } : { display: 'block' }} href="#" className="logo">
      <img className="logo__img" src="img/logo.svg" alt="logo" />
    </a>
  );
}

export default Logo;