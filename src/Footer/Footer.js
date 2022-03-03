import React, { Component } from "react";
import './Footer.scss';

function Footer(props) {
  const footerLinks = ['About', 'Support', 'Puchase'];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copy">2021 © Elegant Dashboard - elegant-dashboard.com</div>
        <ul className="footer__list">
          {footerLinks.map(link => (
            <li className="footer__list-item">
              <a className="footer__list-link" href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;