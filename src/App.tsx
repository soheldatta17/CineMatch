import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import MovieModal from './components/MovieModal';
import GenreSections from './components/GenreSections';
import { Movie } from './types/movie';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  
  // Handler for movie selection
  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  // Handler for closing the movie modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Container maxWidth={false} sx={{ mt: 15, pb: 8 }}>
        <GenreSections searchTerm={searchTerm} onMovieClick={handleOpenModal} />
      </Container>

      {/* Movie Detail Modal */}
      <MovieModal
        movie={selectedMovie}
        open={selectedMovie !== null}
        onClose={handleCloseModal}
      />
    </Box>
  );
}

export default App;