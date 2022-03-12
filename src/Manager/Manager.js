import React from 'react';
import './Manager.scss';

function Manager({ sidebar }) {
    return (
        <div className={sidebar ? "manager manager--small" : "manager"}>
            <img className="manager__img" src="img/manager.svg" alt="manager" />
            <div style={sidebar ? { display: 'none' } : { display: 'block' }} className="manager__name">Nafisa Sh.</div>
            <div style={sidebar ? { display: 'none' } : { display: 'block' }} className="manager__position">Support manager</div>
        </div>
    );
}

export default Manager;