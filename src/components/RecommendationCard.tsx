import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Chip,
} from '@mui/material';
import { Movie } from '../types/movie';

interface RecommendationCardProps {
  movie: Movie;
  onClick: () => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ movie, onClick }) => {
  return (
    <Card 
      sx={{
        height: '100%',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="160"
          image={movie.posterUrl}
          alt={movie.title}
          sx={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
          }}
        >
          {movie.genre.slice(0, 1).map((g) => (
            <Chip 
              key={g}
              label={g}
              size="small"
              sx={{
                bgcolor: g === 'Action' ? '#FF5252' :
                         g === 'Drama' ? '#7C4DFF' :
                         g === 'Sci-Fi' ? '#00BCD4' :
                         g === 'Comedy' ? '#64DD17' :
                         '#607D8B',
                color: '#fff',
                fontWeight: 500,
                fontSize: '0.6rem',
              }}
            />
          ))}
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
          <Typography gutterBottom variant="subtitle1" component="div" noWrap sx={{ fontWeight: 600 }}>
            {movie.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              {movie.year}
            </Typography>
            <Rating value={movie.rating / 2} readOnly size="small" precision={0.5} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecommendationCard;