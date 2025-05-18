import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  delay?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{ height: '100%' }}
    >
      <Card 
        className="movie-card"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.paper',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }
        }}
      >
        <CardActionArea onClick={onClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <Box sx={{ position: 'relative', paddingTop: '150%' /* 2:3 aspect ratio */ }}>
            <CardMedia
              component="img"
              image={movie.posterUrl}
              alt={movie.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 2,
              display: 'flex',
              gap: 0.5,
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
                           g === 'Horror' ? '#FF4081' :
                           g === 'Adventure' ? '#FFAB00' :
                           '#607D8B',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                }}
              />
            ))}
          </Box>
          <CardContent
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              zIndex: 2,
              p: 2,
            }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                color: '#fff', 
                fontWeight: 600,
                fontSize: '1rem',
                lineHeight: 1.2,
                mb: 1,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {movie.title}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                {movie.year} • {movie.duration}
              </Typography>
              <Rating 
                value={movie.rating / 2}
                precision={0.5}
                readOnly
                size="small"
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default MovieCard;