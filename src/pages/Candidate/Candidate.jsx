/* eslint-disable react/prop-types */
import React from 'react';
import './Candidate.scss';
// import { candidatesRow } from '../../utils/data';

// const selectedCandidate = candidatesRow.find((item) => item.id === selectedId);

// if (selectedCandidate) {
//   const SelectedComponent = selectedComponentObj.component;

//   // Now you can render the selected component
//   ReactDOM.render(<SelectedComponent />, document.getElementById('root'));
// } else {
//   console.log('Component not found for the selected ID.');
// }
const Candidate = ({
  id, lastName, image, firstName, email, phone, city, province,
}) => (
  <section className="profile">
    {/* {candidatesRow.filter(item => item.id === id)} */}
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
    </div>
  </section>
);
export default Candidate;
