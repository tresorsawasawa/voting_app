/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { candidatesRow } from '../../utils/data';
import './DataTable.scss';

const DataTable = (props) => {
  const slug = 'candidates';

  const {
    candidatesRow,
    columns,
  } = props;

  // const selectedId = `${slug}/:id`;
  // console.log(selectedId);

  // const selectedCandidate = candidatesRow.find((item) => item.id === selectedId);

  // const handleCandidate = () => {
  //   if (selectedCandidate) {
  //     console.log(selectedCandidate.name);
  //   }
  // };

  // const actionsColumn = {
  //   field: 'details',
  //   headerName: 'Details',
  //   width: 100,
  //   renderCell: (params) => (

  //     <div className="details">
  //       <Link to={`/${slug}/${params.row.id}`}>See More</Link>
  //     </div>
  //   ),
  // };

  return (
    <div className="dataTable">
      <Box className="Box" sx={{ maxWidth: '100%' }}>
        <DataGrid
          className="dataGrid"
          rows={candidatesRow}
          columns={columns}
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
