export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  genre: string[];
  rating: number;
  cast: string[];
  description: string;
  director: string;
  duration: string;
}

export interface GenreSection {
  id: string;
  name: string;
  movies: Movie[];
}