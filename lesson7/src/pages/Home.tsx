import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Welcome to Rick & Morty App</Typography>
      <Typography variant="body1">
        Please use the navigation menu on the left to browse characters.
      </Typography>
    </Paper>
  );
};
export default Home;