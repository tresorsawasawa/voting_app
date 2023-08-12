import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/user_avatar.png';
import './User.scss';

const User = () => (
  <section className="profile">
    <div className="userContainer ">
      <div className="imgContainer">
        <img className="profileImage" src={Avatar} alt="Profile Avatar" />
      </div>

      <span className="regNumber">09</span>

      <div className="firstName between">
        <span className="label">First Name:</span>
        <span className="name ">John</span>
      </div>

      <div className="lastName between">
        <span className="label">Last Name:</span>
        <span className="name ">Doe</span>
      </div>

      <div className="email between">
        <span className="label">Email:</span>
        <span className="name ">johndoe@example.com</span>
      </div>

      <div className="phone between">
        <span className="label">Phone:</span>
        <span className="name ">+250 713 345 678</span>
      </div>

      <div className="City between">
        <span className="label">City:</span>
        <span className="name ">Kigali</span>
      </div>

      <div className="province between">
        <span className="label">Province:</span>
        <span className="name ">Kigali</span>
      </div>

      <Link
        to="/vote_candidate"
        className="voteBtn clickable"
      >
        Vote now

      </Link>
    </div>
  </section>
);
export default User;
