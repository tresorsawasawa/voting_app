import React from 'react';
import './resultTable.scss';

const resultTable = (props) => {
  const { election } = props;

  let total = 0;

  // eslint-disable-next-line no-return-assign
  election.candidates.map((candidate) => (
    total += candidate.votes.length
  ));

  return (
    <table className="table">
      <thead className="head">
        <tr>
          <td>ID</td>
          <td>Image</td>
          <td>First Name</td>
          <td>Votes</td>
          <td>Percentage Vote</td>
        </tr>
      </thead>
      {election.candidates.map(({
        id, firstName, image, votes,
      }) => (
        <tbody key={id}>
          <tr>
            <td>{id}</td>
            <td>
              <img
                src={image}
                alt="avatar"
                style={{
                  width: '80px',
                  height: '80px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderRadius: '50%',
                }}
              />
            </td>
            <td>{firstName}</td>
            <td>{votes.length}</td>
            <th>
              {((votes.length / total) * 100).toFixed(2) || 0}
              {' '}
              %
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default resultTable;
