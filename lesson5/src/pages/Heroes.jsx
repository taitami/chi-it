import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import HeroDetails from '../components/HeroDetails';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
];

const Heroes = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setRows(data.results);
      });
  }, []);

  const handleRowClick = (params) => {
    navigate(`/heroes/${params.id}`);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, height: '80vh' }}>
      
      <Box sx={{ flex: id ? 2 : 1, transition: 'flex 0.3s' }}>
        <Typography variant="h4" gutterBottom>Heroes List</Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          onRowClick={handleRowClick}
          sx={{
            '& .MuiDataGrid-row:hover': {
              cursor: 'pointer',
              backgroundColor: 'action.hover',
            },
             '& .MuiDataGrid-cell:focus': {
                outline: 'none',
             }
          }}
        />
      </Box>

      {id && (
        <Box 
            sx={{ 
                flex: 1, 
                borderLeft: '1px solid gray', 
                pl: 2,
                animation: 'fadeIn 0.5s'
            }}
        >
          <HeroDetails id={id} />
        </Box>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};

export default Heroes;