import React, { Component } from "react";
import './Manager.scss';

function Manager(sidebar) {
  return (
    <div className="manager">
      <img className="manager__img" src="img/manager.svg" alt="manager" />
      <div style={sidebar ? { display: 'block' } : { display: 'none' }} className="manager__name">Nafisa Sh.</div>
      <div style={sidebar ? { display: 'block' } : { display: 'none' }} className="manager__position">Support manager</div>
    </div>
  );
}

export default Manager;