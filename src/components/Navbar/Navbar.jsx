import React from 'react';
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

const Navbar = () => {
  const links = [
    {
      id: uuid(),
      name: 'Login',
      to: '/sign_in',
      className: 'clickable',
    },
    {
      id: uuid(),
      name: 'Sign Up',
      to: '/sign_up',
      className: 'clickable',
    },
  ];

  return (
    links.map(
      ({
        id, name, to, className,
      }) => (
        <NavLink
          key={id}
          to={to}
          className={className}
        >
          {name}
        </NavLink>
      ),
    )
  );
};

export default Navbar;
