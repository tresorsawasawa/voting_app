import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { candidatesRow } from '../../utils/data';
import './DataTable.scss';

const DataTable = () => {
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
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: false,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 160,
      editable: false,
      renderCell: (params) => (
        <span className="phoneNumber">{params.row.phone || null}</span>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: () => (
        <button className="voteBtn clickable" type="submit">
          Vote
        </button>
      ),
    },
  ];

  // const actionsColumn = {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="action">
  //           <Link to={`/${props.slug}/${params.row.id}`}>
  //             <img src="/view.svg" alt="" />
  //           </Link>
  //           <div className="delete" onClick={() => handleDelete(params.row.id)}>
  //             <img src="/delete.svg" alt="" />
  //           </div>
  //         </div>
  //       );
  //     },
  //   };
  // };

  const slug = 'users';

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
    <div className="dataTable">
      <Box className="Box" sx={{ maxWidth: '100%' }}>
        <DataGrid
          className="dataGrid"
          rows={candidatesRow}
          columns={[...columns, actionsColumn]}
          slug={slug}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
};

export default DataTable;
