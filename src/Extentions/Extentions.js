import React, { Component } from "react";
import ExtentionCards from '../ExtentionCards/ExtentionCards';
import useExtentionsState from '../useExtentionsState/useExtentionsState';
import './Extentions.scss';

function Extentions() {
  const { extentions, deleteExtention } = useExtentionsState([]);
  return (
    <div className="extentions">
      <div className="extentions__top">
        <h1>Extentions</h1>
        <button className="btn add-extention">
          <span style={{ backgroundImage: 'url(img/icons/plus.svg)' }}>Add new</span>
        </button>
      </div>
      <ExtentionCards extentions={extentions} deleteExtention={deleteExtention} />
    </div>
  );
}

export default Extentions;