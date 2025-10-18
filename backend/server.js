const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.145.129:3000'],
  credentials: true
}));

const movies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
  { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 },
  { id: 5, title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8 },
  { id: 6, title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
  { id: 7, title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8 },
  { id: 8, title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3 },
  { id: 9, title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2 },
  { id: 10, title: "Avengers: Endgame", year: 2019, genre: "Action", rating: 8.4 },
  { id: 11, title: "Spirited Away", year: 2001, genre: "Animation", rating: 8.6 },
  { id: 12, title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 }
];

app.get('/api/movies', (req, res) => res.json(movies));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
