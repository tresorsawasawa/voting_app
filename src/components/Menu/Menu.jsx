/* eslint-disable array-callback-return */

import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/data';

import './Menu.scss';

const Menu = () => (

  <section className="menu">
    <ul className="items">
      {links.map((item) => (
        <li className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.path} className="link" key={listItem.id}>
              {listItem.icon}
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </li>
      ))}
    </ul>
  </section>
);

export default Menu;
