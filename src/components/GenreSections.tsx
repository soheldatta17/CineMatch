import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Skeleton,
  Chip,
  alpha,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';
import { getGenreSections, sampleMovies } from '../data/sampleMovies';
import { Movie } from '../types/movie';

interface GenreSectionsProps {
  searchTerm: string;
  onMovieClick: (movie: Movie) => void;
}

const GenreSections: React.FC<GenreSectionsProps> = ({ searchTerm, onMovieClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const genreSections = getGenreSections();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredMovies = searchTerm
    ? sampleMovies.filter((movie) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          movie.title.toLowerCase().includes(searchLower) ||
          movie.director.toLowerCase().includes(searchLower) ||
          movie.cast.some((actor) => actor.toLowerCase().includes(searchLower)) ||
          movie.genre.some((genre) => genre.toLowerCase().includes(searchLower)) ||
          movie.year.toString().includes(searchLower)
        );
      })
    : null;

  const scrollGenreRow = (genreId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(`genre-row-${genreId}`);
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
    }
  };

  if (searchTerm && filteredMovies) {
    return (
      <Box sx={{ mt: 4, px: { xs: 1, sm: 2 } }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Search Results for "{searchTerm}"
        </Typography>
        {filteredMovies.length === 0 ? (
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', py: 8 }}>
            No movies found matching your search.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredMovies.map((movie, index) => (
              <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2.4}>
                <Box sx={{ height: '100%' }}>
                  <MovieCard movie={movie} onClick={() => onMovieClick(movie)} delay={index} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 700,
            px: { xs: 2, sm: 0 },
            background: 'linear-gradient(90deg, #BB86FC 0%, #03DAC6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Discover Movies
        </Typography>
      </motion.div>

      {/* Hero Section */}
      <Box
        sx={{
          mb: 6,
          height: { xs: '220px', sm: '300px', md: '400px' },
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
        ) : (
          <>
            <Box
              component="img"
              src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
              alt="Featured Movie"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.6)',
                transition: 'transform 10s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
                p: { xs: 2, sm: 4 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography variant="h3" component="h2" sx={{ color: 'white', fontWeight: 700 }}>
                  The Dark Knight
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mt: 1 }}>
                  When the menace known as the Joker wreaks havoc on Gotham City, Batman must accept one of the greatest psychological tests of his ability to fight injustice.
                </Typography>
                <Box sx={{ display: 'flex', mt: 2, gap: 1 }}>
                  {['Action', 'Crime', 'Drama'].map((genre) => (
                    <Chip
                      key={genre}
                      label={genre}
                      size="small"
                      sx={{
                        bgcolor:
                          genre === 'Action'
                            ? '#FF5252'
                            : genre === 'Drama'
                            ? '#7C4DFF'
                            : '#607D8B',
                        color: '#fff',
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Box>
          </>
        )}
      </Box>

      {/* Genre Sections */}
      {genreSections.map((section) => (
        <Box key={section.id} sx={{ mb: 5 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 2, sm: 0 },
              mb: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {section.name}
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box
                  onClick={() => scrollGenreRow(section.id, 'left')}
                  sx={{
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <ChevronLeft size={24} />
                </Box>
                <Box
                  onClick={() => scrollGenreRow(section.id, 'right')}
                  sx={{
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <ChevronRight size={24} />
                </Box>
              </Box>
            )}
          </Box>

          {/* Horizontal scrollable movie row */}
          <Box
            id={`genre-row-${section.id}`}
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              px: { xs: 2, sm: 0 },
              pb: 2,
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                height: 6,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                borderRadius: 3,
              },
            }}
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Box
                    key={i}
                    sx={{ flexShrink: 0, width: { sm: 200, md: 220 }, height: 330 }}
                  >
                    <Skeleton variant="rectangular" height="100%" animation="wave" />
                  </Box>
                ))
              : section.movies.map((movie, index) => (
                  <Box
                    key={movie.id}
                    sx={{ flexShrink: 0, width: { sm: 200, md: 220 }, height: '100%' }}
                  >
                    <MovieCard movie={movie} onClick={() => onMovieClick(movie)} delay={index} />
                  </Box>
                ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GenreSections;
