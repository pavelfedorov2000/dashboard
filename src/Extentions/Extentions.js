import React, { Component } from "react";
import { useState } from 'react';
import './Extentions.scss';

function Extentions() {

  const extentionsData = [
    {
      name: "Jetpack security",
      img: '01',
      status: 'active',
    },
    {
      name: "Superb Blocks",
      img: '02',
      status: 'active',
    },
    {
      name: "Preferred Languages",
      img: '03',
      status: 'active',
    },
    {
      name: "Yoast SEO",
      img: '04',
      status: 'active',
    },
    {
      name: "Elementor Website Builder",
      img: '05',
      status: 'active',
    },
    {
      name: "Slider",
      img: '06',
      status: 'active',
    },
    {
      name: "Jetpack security",
      img: '07',
      status: 'active',
    },
    {
      name: "GiveWP – Donation Plugin",
      img: '08',
      status: 'active',
    },
    {
      name: "Atomic Blocks – Gutenberg Blocks",
      img: '09',
      status: 'active',
    },
  ];

  const [extentions, setExtentions] = useState(extentionsData);
  console.log(extentions);

  function handleDeleteClick(index) {
    const removeExtention = extentions.filter((_, extentionIndex) => {
      return extentionIndex !== index;
    });
    setExtentions(removeExtention);
  }

  const handleDisableClick = (event, index) => {
    let extentionsCopy = Object.assign([], extentions);
    extentionsCopy[index].status = 'disabled';
    setExtentions(extentionsCopy);
  }

  const handleEnableClick = (event, index) => {
    let extentionsCopy = Object.assign([], extentions);
    extentionsCopy[index].status = 'active';
    setExtentions(extentionsCopy);
  }

  const [extentionName, setExtentionName] = useState('');
  function handleNameInputChange(e) {
    setExtentionName(e.target.value);
  }
  const [extentionText, setExtentionText] = useState('');
  function handleTextInputChange(e) {
    setExtentionText(e.target.value);
  }

  const handleFormSubmit = () => {
    if (extentionName !== "" && extentionText !== "") {
      setExtentions([
        ...extentions,
        {
          img: `0${Math.floor(Math.random() * 10)}`,
          name: extentionName,
          text: extentionText,
          status: 'active',
        }
      ]);
    }
    setExtentionName('');
    setExtentionText('');
  }

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(!isPopupOpen);
  }

  const closePopup = () => {
    setPopupOpen(!isPopupOpen);
  }

  const submitFunc = (e) => {
    e.preventDefault();
    handleFormSubmit();
    closePopup();
  }

  return (
    <div className="extentions">
      <div className="extentions__top">
        <h1>Extentions</h1>
        <button className="btn add-extention" type="button" onClick={openPopup}>
          <span style={{ backgroundImage: 'url(img/icons/plus.svg)' }}>Add new</span>
        </button>
      </div>
      <div className="extentions__cards">
        {extentions.map((extention, index) => (
          <div className="extention-card" key={`extention-${index}`}>
            <div className="extention-card__img">
              <img src={`img/icons/extentions/${extention.img}.png`} alt="extention icon" />
            </div>
            <span className="extention-card__status" style={extention.status === 'active' ? { backgroundColor: 'rgba(88, 135, 255, 0.1)', color: '#5887FF' } : { backgroundColor: 'rgba(255, 172, 50, 0.1)', color: '#FFB648' }}>{extention.status}</span>
            <h5 className="extention-card__title">{extention.name}</h5>
            <p className="extention-card__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <button className={extention.status === 'active' ? 'extention-card__btn extention-card__btn--disable' : 'extention-card__btn extention-card__btn--enable'} type="button" onClick={extention.status === 'active' ? e => handleDisableClick(e, index) : e => handleEnableClick(e, index)}>{extention.status === 'active' ? 'Disable' : 'Activate'}</button>
            <button className="extention-card__btn extention-card__btn--delete" type="button" onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="overlay" style={isPopupOpen ? { display: 'flex' } : { display: 'none' }}>
        <button className="close-popup" type="button" onClick={closePopup}>&times;</button>
        <div className="popup">
          <div className="popup__title">Add Extention</div>
          <form className="form popup__form" onSubmit={submitFunc}>
            <label className="form__item">
              <div className="form__label">Extention title</div>
              <input className="form__input" placeholder="Enter extention title" name="extention-name" value={extentionName} onChange={handleNameInputChange} />
            </label>
            <label className="form__item">
              <div className="form__label">Extention description</div>
              <input className="form__input" placeholder="Enter extention description" name="extention-description" value={extentionText} onChange={handleTextInputChange} />
            </label>
            <button className="btn form__btn" type="submit">Add new extention</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Extentions;