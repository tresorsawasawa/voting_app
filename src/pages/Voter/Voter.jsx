/* eslint-disable react/prop-types */
import React from 'react';
import './Voter.scss';

const Voter = (props) => {
  const {
    id, image, firstName, lastName, voteCode,
  } = props;

  return (
    <section className="profile">
      <div className="userContainer ">
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

        <div className="City between">
          <span className="label">Vote Code:</span>
          <span className="name ">{voteCode}</span>
        </div>
      </div>
    </section>
  );
};
export default Voter;
