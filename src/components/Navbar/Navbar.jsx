import React from 'react';
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

import './Navbar.scss';
import UserImage from '../../assets/images/user_avatar.png';

const Navbar = () => {
  const links = [
    {
      id: uuid(),
      name: 'Login',
      to: '/sign_in',
      className: 'clickable icon',
    },
    {
      id: uuid(),
      name: 'Sign Up',
      to: '/sign_up',
      className: 'clickable icon',
    },
  ];

  console.log(links);

  return (
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
        <img src={UserImage} alt="user avatar" className="userImage" />
        {/* {links.map(({
          id, name, to, className,
        }) => (
          <NavLink key={id} to={to} className={className}>
            {name}
          </NavLink>
        ))} */}
      </div>
    </header>
  );
};

export default Navbar;
