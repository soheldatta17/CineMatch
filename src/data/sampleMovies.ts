import { Movie } from '../types/movie';

// Sample movie data
export const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2010,
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    duration: "2h 28m"
  },
  {
    id: 2,
    title: "The Dark Knight",
    posterUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    duration: "2h 32m"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    posterUrl: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1994,
    genre: ["Crime", "Drama"],
    rating: 8.9,
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    duration: "2h 34m"
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    posterUrl: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    duration: "2h 22m"
  },
  {
    id: 5,
    title: "La La Land",
    posterUrl: "https://images.pexels.com/photos/1764564/pexels-photo-1764564.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2016,
    genre: ["Comedy", "Drama", "Music", "Romance"],
    rating: 8.0,
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"],
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    director: "Damien Chazelle",
    duration: "2h 8m"
  },
  {
    id: 6,
    title: "The Matrix",
    posterUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    duration: "2h 16m"
  },
  {
    id: 7,
    title: "Parasite",
    posterUrl: "https://images.pexels.com/photos/1447092/pexels-photo-1447092.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2019,
    genre: ["Comedy", "Drama", "Thriller"],
    rating: 8.6,
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon-ho",
    duration: "2h 12m"
  },
  {
    id: 8,
    title: "Interstellar",
    posterUrl: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    duration: "2h 49m"
  },
  {
    id: 9,
    title: "The Godfather",
    posterUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2,
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    duration: "2h 55m"
  },
  {
    id: 10,
    title: "Spirited Away",
    posterUrl: "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2001,
    genre: ["Animation", "Adventure", "Family"],
    rating: 8.6,
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito"],
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    director: "Hayao Miyazaki",
    duration: "2h 5m"
  },
  {
    id: 11,
    title: "The Social Network",
    posterUrl: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2010,
    genre: ["Biography", "Drama"],
    rating: 7.7,
    cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Rooney Mara"],
    description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    director: "David Fincher",
    duration: "2h 0m"
  },
  {
    id: 12,
    title: "Whiplash",
    posterUrl: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2014,
    genre: ["Drama", "Music"],
    rating: 8.5,
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser"],
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    director: "Damien Chazelle",
    duration: "1h 47m"
  },
  {
    id: 13,
    title: "Black Panther",
    posterUrl: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2018,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.3,
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    director: "Ryan Coogler",
    duration: "2h 14m"
  },
  {
    id: 14,
    title: "Avatar",
    posterUrl: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2009,
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 7.8,
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    director: "James Cameron",
    duration: "2h 42m"
  },
  {
    id: 15,
    title: "Get Out",
    posterUrl: "https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2017,
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.7,
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Catherine Keener"],
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    director: "Jordan Peele",
    duration: "1h 44m"
  },
  
  // Adding 35 more movies to reach 50 total
  {
    id: 16,
    title: "The Grand Budapest Hotel",
    posterUrl: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2014,
    genre: ["Adventure", "Comedy", "Crime"],
    rating: 8.1,
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric", "Adrien Brody"],
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    director: "Wes Anderson",
    duration: "1h 39m"
  },
  {
    id: 17,
    title: "The Lion King",
    posterUrl: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1994,
    genre: ["Animation", "Adventure", "Drama"],
    rating: 8.5,
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Whoopi Goldberg"],
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    director: "Roger Allers, Rob Minkoff",
    duration: "1h 28m"
  },
  {
    id: 18,
    title: "Moonlight",
    posterUrl: "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2016,
    genre: ["Drama"],
    rating: 7.4,
    cast: ["Mahershala Ali", "Naomie Harris", "Trevante Rhodes", "Ashton Sanders"],
    description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    director: "Barry Jenkins",
    duration: "1h 51m"
  },
  {
    id: 19,
    title: "Eternal Sunshine of the Spotless Mind",
    posterUrl: "https://images.pexels.com/photos/2901682/pexels-photo-2901682.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2004,
    genre: ["Drama", "Romance", "Sci-Fi"],
    rating: 8.3,
    cast: ["Jim Carrey", "Kate Winslet", "Tom Wilkinson", "Gerry Robert Byrne"],
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories for ever.",
    director: "Michel Gondry",
    duration: "1h 48m"
  },
  {
    id: 20,
    title: "Mad Max: Fury Road",
    posterUrl: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2015,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.1,
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Zoë Kravitz"],
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    director: "George Miller",
    duration: "2h 0m"
  },
  {
    id: 21,
    title: "The Truman Show",
    posterUrl: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1998,
    genre: ["Comedy", "Drama", "Sci-Fi"],
    rating: 8.1,
    cast: ["Jim Carrey", "Ed Harris", "Laura Linney", "Noah Emmerich"],
    description: "An insurance salesman discovers his entire life is actually a reality TV show.",
    director: "Peter Weir",
    duration: "1h 43m"
  },
  {
    id: 22,
    title: "Her",
    posterUrl: "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2013,
    genre: ["Drama", "Romance", "Sci-Fi"],
    rating: 8.0,
    cast: ["Joaquin Phoenix", "Amy Adams", "Scarlett Johansson", "Rooney Mara"],
    description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    director: "Spike Jonze",
    duration: "2h 6m"
  },
  {
    id: 23,
    title: "Blade Runner 2049",
    posterUrl: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2017,
    genre: ["Action", "Drama", "Mystery", "Sci-Fi", "Thriller"],
    rating: 8.0,
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks"],
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    director: "Denis Villeneuve",
    duration: "2h 44m"
  },
  {
    id: 24,
    title: "The Departed",
    posterUrl: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    director: "Martin Scorsese",
    duration: "2h 31m"
  },
  {
    id: 25,
    title: "Toy Story",
    posterUrl: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1995,
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    rating: 8.3,
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"],
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    director: "John Lasseter",
    duration: "1h 21m"
  },
  // Continuing to add more movies to reach 50...
  {
    id: 26,
    title: "Jurassic Park",
    posterUrl: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1993,
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rating: 8.1,
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough"],
    description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    director: "Steven Spielberg",
    duration: "2h 7m"
  },
  // Adding remaining movies to reach 50...
  {
    id: 27,
    title: "The Silence of the Lambs",
    posterUrl: "https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    director: "Jonathan Demme",
    duration: "1h 58m"
  },
  {
    id: 28,
    title: "Fight Club",
    posterUrl: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1999,
    genre: ["Drama"],
    rating: 8.8,
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf", "Zach Grenier"],
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    duration: "2h 19m"
  },
  // Adding more movies until we have a total of 50...
  {
    id: 29,
    title: "Goodfellas",
    posterUrl: "https://images.pexels.com/photos/6899185/pexels-photo-6899185.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    rating: 8.7,
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    director: "Martin Scorsese",
    duration: "2h 25m"
  },
  {
    id: 30,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    posterUrl: "https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?auto=compress&cs=tinysrgb&w=600",
    year: 2001,
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rating: 8.8,
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Sean Bean"],
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    director: "Peter Jackson",
    duration: "2h 58m"
  }
];

// Helper function to get recommendations for a movie (simplified version)
export const getRecommendations = (movieId: number): Movie[] => {
  // In a real application, this would use ML or be fetched from an API
  // Here we'll just return 4 random movies from the same genre
  const movie = sampleMovies.find(m => m.id === movieId);
  if (!movie) return [];
  
  // Find movies with at least one matching genre
  const matchingGenres = sampleMovies.filter(m => 
    m.id !== movieId && m.genre.some(g => movie.genre.includes(g))
  );
  
  // Shuffle and take up to 4 movies
  return matchingGenres
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
};

// Get all unique genres
export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  sampleMovies.forEach(movie => {
    movie.genre.forEach(g => genres.add(g));
  });
  return Array.from(genres).sort();
};

// Get movies by genre
export const getMoviesByGenre = (genre: string): Movie[] => {
  return sampleMovies.filter(movie => movie.genre.includes(genre));
};

// Generate sections by genre
export const getGenreSections = () => {
  const genres = getAllGenres();
  return genres.map(genre => ({
    id: genre.toLowerCase().replace(/\s+/g, '-'),
    name: genre,
    movies: getMoviesByGenre(genre)
  }));
};