import React from 'react';
import { candidatesRow } from '../../utils/data';
import './Vote.scss';

const Vote = () => (
  <section className="vote">
    <h2 className="title">Vote Your Favorite Candidate</h2>

    <ul className="candidatesList">
      {candidatesRow.map(({
        id, image, firstName, lastName, position, politicalParty,
      }) => (
        <li key={id} className="candidate">
          <div className="candidateCard">
            <img src={image} alt="avatar" />

            <div className="candidateInfo">
              <div className="between">
                <span>First Name:</span>
                <span>{firstName}</span>
              </div>
              <div className="between">
                <span>Last Name:</span>
                <span>{lastName}</span>
              </div>
              <div className="between">
                <span>Position:</span>
                <span>{position}</span>
              </div>
              <div className="between">
                <span>Polit. Party:</span>
                <span>{politicalParty}</span>
              </div>
            </div>
            <button className="voteBtn clickable" type="submit">Vote</button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Vote;
