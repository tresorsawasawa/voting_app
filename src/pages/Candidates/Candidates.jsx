import { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../components/DataTable/DataTable';
import { candidatesRow } from '../../utils/data';

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
    field: 'position',
    headerName: 'Position',
    width: 150,
    editable: false,
  },
  {
    field: 'politicalParty',
    headerName: 'Political Party',
    width: 160,
    editable: false,
  },
];

const Candidates = () => {
  const [open, setOpen] = useState(false);

  const handleNewCandidate = () => setOpen(!open);

  const slug = 'candidates';

  const actionsColumn = {
    field: 'details',
    headerName: 'Details',
    width: 100,
    renderCell: (params) => (

      <div className="details">
        <Link to={`/${slug}/${params.row.id}`}>See More</Link>
      </div>
    ),
  };

  return (
    <section className="candidates">
      <h2>Candidates</h2>

      <button type="submit" onClick={handleNewCandidate}>
        Add New Candidate
      </button>

      <DataTable
        candidatesRow={candidatesRow}
        columns={[...columns, actionsColumn]}
      />
    </section>
  );
};

export default Candidates;
