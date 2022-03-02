import React, { Component } from 'react'
import { Link } from "react-router-dom"

function NotFound(props) {
  return (
    <div className="not-found">
      <img className="not-found__img" src="img/not-found.svg" alt="404" />
      <h1 className="not-found__title">Page not found.</h1>
      <p className="not-found__text">The page you are looking for might have been removed.</p>
      <Link to="/home">Return to home</Link>
    </div>
  );
}

export default NotFound;