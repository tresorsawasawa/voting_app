import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="notFoundContainer">
    <Link
      to="/"
      className="back-to-home"
    >
      Go Back To Home Page
    </Link>

    <div className="text-container">
      <h3>The page you opened doesn&apos;t exist.</h3>
    </div>
  </section>
);

export default NotFound;
