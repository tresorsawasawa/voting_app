import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="main">
    <Navbar />
    <div className="container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="contentContainer">
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
