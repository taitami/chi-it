import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Skeleton, Box } from '@mui/material';

const HeroDetails = ({ id }) => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHero(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box>
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Skeleton variant="text" sx={{ fontSize: '2rem', mt: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Box>
    );
  }

  return (
    <Card sx={{ maxWidth: '100%', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={hero.image}
        alt={hero.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {hero.name}
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