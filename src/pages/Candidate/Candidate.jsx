import React from 'react';
import { Link } from 'react-router-dom';
// import Avatar from '../../assets/images/user_avatar.png';
import './Candidate.scss';
import { candidatesRow } from '../../utils/data';

const Candidate = () => (
  <section className="profile">
    {candidatesRow.map(
      ({
        id, lastName, image, firstName, email, phone, city, province,
      }) => (
        <div key={id} className="userContainer">
          <div className="imgContainer">
            <img className="profileImage" src={image} alt="Profile Avatar" />
          </div>

          <span className="regNumber">{id}</span>

          <div className="firstName between">
            <span className="label">First Name:</span>
            <span className="name ">{firstName}</span>
          </div>

          <div className="lastName between">
            <span className="label">Last Name:</span>
            <span className="name ">{lastName}</span>
          </div>

          <div className="email between">
            <span className="label">Email:</span>
            <span className="name ">{email}</span>
          </div>

          <div className="phone between">
            <span className="label">Phone:</span>
            <span className="name ">{phone}</span>
          </div>

          <div className="City between">
            <span className="label">City:</span>
            <span className="name ">{city}</span>
          </div>

          <div className="province between">
            <span className="label">Province:</span>
            <span className="name ">{province}</span>
          </div>

          <Link to="/vote_candidate" className="voteBtn clickable">
            Vote now
          </Link>
        </div>
      ),
    )}
  </section>
);
export default Candidate;
