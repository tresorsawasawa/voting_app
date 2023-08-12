/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => (
  <section className="login">
    <h2 className="loginTitle">
      Login
    </h2>
    <div className="emailContainer">
      <label>Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <div className="passwordContainer">
      <label>Password</label>
      <input type="password" name="password" id="password" />
    </div>
    <div className="signup">
      <span>You don&apos;t an account?</span>
      <Link
        to="/sign_up"
        className="register_link"
      >
        Signup
      </Link>
    </div>
  </section>
);

export default Login;
