/* eslint-disable array-callback-return */

import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../utils/data';

import './Menu.scss';

const Menu = () => {
  console.log(menu);

  return (

    <section className="menu">
      <ul className="items">
        {menu.map((item) => (
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
};

export default Menu;
