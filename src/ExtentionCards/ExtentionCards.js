import React from 'react';
import '../Extentions/Extentions.scss';

const extentions = [
  "Jetpack security",
  "Superb Blocks",
  "Preferred Languages",
  "Yoast SEO",
  "Elementor Website Builder",
  "Slider",
  "Jetpack security",
  "GiveWP – Donation Plugin",
  "Atomic Blocks – Gutenberg Blocks",
];

function ExtentionCards() {
  return (
    <div className="extentions__cards">
      {extentions.map((extention, index) => (
        <div className="extention-card" key={`extention-${index}`}>
          <div className="extention-card__img">
            <img src={`img/icons/extentions/0${index + 1}.png`} alt="extention icon" />
          </div>
          <span className="extention-card__status">Active</span>
          <h5 className="extention-card__title">{extention}</h5>
          <p className="extention-card__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          <button className="extention-card__btn extention-card__btn--disable" type="button">Disable</button>
          <button className="extention-card__btn extention-card__btn--delete" type="button" >Delete</button>
        </div>
      ))}
    </div>
  );
}

//onClick={() => { deleteExtention(index) }}

export default ExtentionCards;