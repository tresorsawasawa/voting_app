import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import UserImage from '../../assets/images/user_avatar.png';

const Navbar = () => (
  <header className="header">
    <div className="logoContainer">
      <h2 className="logo">
        <NavLink to="/">
          Vote
          {' '}
          <span className="dot">.</span>
        </NavLink>
      </h2>
    </div>

    <div className="icons">
      <NavLink to={`${'voters'}/:id`} className="user">
        <img src={UserImage} alt="user avatar" className="userImage" />
        <span className="userName">Tresor</span>
      </NavLink>
    </div>
  </header>
);

export default Navbar;
