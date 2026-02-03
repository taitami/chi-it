import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>About</Typography>
      <Typography variant="body1">
        This is a homework project implementing React 19, TypeScript, MUI DataGrid, and ahooks.
      </Typography>
    </Paper>
  );
};
export default About;