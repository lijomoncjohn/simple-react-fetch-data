import React from 'react';

import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <ul className="navbar">
        <NavLink to="/" exact className="nav-item"><a className="nav-link" href="#home">Home</a></NavLink>
  </ul>
  )
};

export default Navigation;
