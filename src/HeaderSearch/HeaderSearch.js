import React from "react";

function HeaderSearch(props) {
  return (
    <input className="search-input header__search" placeholder="Enter keywords ..." style={{ backgroundImage: 'url(img/icons/search.svg)' }} />
  );
}

export default HeaderSearch;