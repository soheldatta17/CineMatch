import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Chip,
  Grid,
  IconButton,
  Rating,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { X, Calendar, Clock, Award } from 'lucide-react';
import { Movie } from '../types/movie';
import { getRecommendations } from '../data/sampleMovies';
import RecommendationCard from './RecommendationCard';
import { motion, AnimatePresence } from 'framer-motion';

interface MovieModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, open, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  if (!movie) return null;
  
  const recommendations = getRecommendations(movie.id);
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
      sx={{
        '& .MuiDialog-paper': {
          bgcolor: 'background.paper',
          backgroundImage: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.8), rgba(30, 30, 46, 0.95))',
          borderRadius: { xs: 0, sm: 3 },
          overflow: 'hidden',
        },
        '& .MuiBackdrop-root': {
          backdropFilter: 'blur(8px)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10,
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <X size={24} />
        </IconButton>
  
        <Box sx={{ position: 'relative', mb: 2 }}>
          {/* Movie poster as backdrop */}
          <Box
            component="img"
            src={movie.posterUrl}
            alt={movie.title}
            sx={{
              width: '100%',
              height: { xs: '250px', sm: '300px', md: '350px' },
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.7)',
            }}
          />
          
          {/* Gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.2) 0%, rgba(18, 18, 18, 0.9) 85%, rgba(18, 18, 18, 1) 100%)',
            }}
          />
          
          {/* Movie details overlay */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              p: { xs: 2, sm: 3 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 700 }}>
                {movie.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, flexWrap: 'wrap', gap: 1 }}>
                <Rating value={movie.rating / 2} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ color: theme.palette.primary.light, fontWeight: 600, ml: 1 }}>
                  {movie.rating.toFixed(1)}/10
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: { xs: 0, sm: 2 }, mt: { xs: 1, sm: 0 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Calendar size={16} color={theme.palette.text.secondary} />
                    <Typography variant="body2" sx={{ ml: 0.5, color: theme.palette.text.secondary }}>
                      {movie.year}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Clock size={16} color={theme.palette.text.secondary} />
                    <Typography variant="body2" sx={{ ml: 0.5, color: theme.palette.text.secondary }}>
                      {movie.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Award size={16} color={theme.palette.text.secondary} />
                    <Typography variant="body2" sx={{ ml: 0.5, color: theme.palette.text.secondary }}>
                      {movie.director}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
        
        <DialogContent sx={{ pt: 0 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  Overview
                </Typography>
                <Typography variant="body1" paragraph>
                  {movie.description}
                </Typography>
              
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Genres
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                    {movie.genre.map(genre => (
                      <Chip 
                        key={genre} 
                        label={genre} 
                        sx={{
                          bgcolor: genre === 'Action' ? '#FF5252' :
                                  genre === 'Drama' ? '#7C4DFF' :
                                  genre === 'Sci-Fi' ? '#00BCD4' :
                                  genre === 'Comedy' ? '#64DD17' :
                                  genre === 'Horror' ? '#FF4081' :
                                  genre === 'Adventure' ? '#FFAB00' :
                                  '#607D8B',
                          color: '#fff',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Cast
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                    {movie.cast.map(actor => (
                      <Chip 
                        key={actor} 
                        label={actor} 
                        variant="outlined"
                        sx={{ borderColor: 'rgba(255,255,255,0.2)' }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          {/* Recommendations */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              You might also like
            </Typography>
            
            <AnimatePresence>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {recommendations.map((rec, index) => (
                  <Grid item xs={6} sm={4} md={3} key={rec.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <RecommendationCard 
                        movie={rec}
                        onClick={() => {
                          onClose();
                          // Short timeout to allow modal to close before opening new one
                          setTimeout(() => {
                            // Here you'd typically dispatch an action or use a callback to select the new movie
                            // For demo purposes we'll just use an alert
                            alert(`You selected: ${rec.title}`);
                          }, 300);
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </AnimatePresence>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default MovieModal;