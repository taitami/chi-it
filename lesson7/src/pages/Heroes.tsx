import React from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Box, Typography, Alert, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getCharacters } from '../api/charactersApi';
import HeroDetails from '../components/HeroDetails';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
];

const Heroes: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useRequest(getCharacters);

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/heroes/${params.id}`);
  };

  if (error) {
    return <Alert severity="error">Failed to load heroes list.</Alert>;
  }

  return (
    <Box sx={{ display: 'flex', height: '85vh', gap: 2 }}>
      
      <Paper sx={{ flex: id ? 2 : 1, transition: 'flex 0.3s ease', p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" gutterBottom>Heroes List</Typography>
        <DataGrid
          rows={data || []}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 25]}
          onRowClick={handleRowClick}
          sx={{
            '& .MuiDataGrid-row:hover': {
              cursor: 'pointer',
              bgcolor: 'action.hover', 
            },
          }}
        />
      </Paper>

      {id && (
        <Paper 
            sx={{ 
                flex: 1, 
                overflowY: 'auto',
                animation: 'slideIn 0.3s ease-out'
            }}
        >
          <HeroDetails id={id} />
        </Paper>
      )}
      
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};

export default Heroes;