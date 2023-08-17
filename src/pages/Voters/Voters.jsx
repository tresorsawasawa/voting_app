import React from 'react';
import DataTable from '../../components/DataTable/DataTable';
import { voters } from '../../utils/data';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'image',
    headerName: 'Image',
    width: 70,
    renderCell: (params) => (
      <img
        src={
          params.row.img
          || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        alt="Candidate Avatar"
        className="avatar"
      />
    ),
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: false,
  },
  {
    field: 'voteCode',
    headerName: 'Vote Code',
    width: 150,
    editable: false,
  },
  {
    field: 'hasVoted',
    headerName: 'Has Voted',
    width: 160,
    editable: false,
  },
];

const Voters = () => (
  <section className="voters">
    <h2 style={{ marginBottom: '1rem' }}>Voters</h2>

    <DataTable columns={columns} candidatesRow={voters} />
  </section>
);

export default Voters;
