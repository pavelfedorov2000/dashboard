import React, { Component } from "react";
import './Manager.scss';

function Manager(props) {
  return (
    <div className="manager">
      <img className="manager__img" src="img/manager.svg" alt="manager" />
      <div className="manager__name">Nafisa Sh.</div>
      <div className="manager__position">Support manager</div>
    </div>
  );
}

export default Manager;