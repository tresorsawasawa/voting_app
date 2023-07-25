import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Navbar />

    <Outlet />
  </>
);

export default App;
