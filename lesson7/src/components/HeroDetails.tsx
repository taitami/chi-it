import React from 'react';
import { Card, CardContent, CardMedia, Typography, Skeleton, Box, Alert } from '@mui/material';
import { useRequest } from 'ahooks';
import { getCharacterById } from '../api/charactersApi';

interface HeroDetailsProps {
  id: string;
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ id }) => {
  const { data: hero, loading, error } = useRequest(
    () => getCharacterById(id), 
    { refreshDeps: [id] }
  );

  if (loading) {
    return (
      <Box sx={{ p: 2 }}>
        <Skeleton variant="rectangular" width="100%" height={300} />
        <Skeleton variant="text" sx={{ fontSize: '2rem', mt: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Error loading details.</Alert>;
  }

  if (!hero) return null;

  return (
    <Card sx={{ maxWidth: '100%', m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="350"
        image={hero.image}
        alt={hero.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {hero.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
            <strong>ID:</strong> {hero.id}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Status:</strong> {hero.status}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Species:</strong> {hero.species}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Gender:</strong> {hero.gender}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <strong>Location:</strong> {hero.location?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeroDetails;