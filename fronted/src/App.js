import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => {
        console.error('Error fetching movies:', err);
        // Fallback data
        setMovies([
          { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
          { id: 2, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
          { id: 3, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
          { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 },
          { id: 5, title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8 },
          { id: 6, title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
        ]);
      });
  }, []);

  // Group movies by genre for Netflix-style rows
  const moviesByGenre = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
      acc[movie.genre] = [];
    }
    acc[movie.genre].push(movie);
    return acc;
  }, {});

  return (
    <div style={{
      background: '#141414',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      paddingBottom: '50px'
    }}>
      {/* Netflix-style Header */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
        padding: '20px 50px',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: '#e50914',
          fontSize: '2.5em',
          fontWeight: 'bold',
          margin: '0'
        }}>
          CINESTREAM
        </h1>
        <nav style={{
          display: 'flex',
          gap: '20px'
        }}>
          <span style={{ cursor: 'pointer', color: '#fff' }}>Home</span>
          <span style={{ cursor: 'pointer', color: '#fff' }}>TV Shows</span>
          <span style={{ cursor: 'pointer', color: '#fff' }}>Movies</span>
          <span style={{ cursor: 'pointer', color: '#fff' }}>New & Popular</span>
        </nav>
      </header>

      {/* Main Content */}
      <div style={{ marginTop: '80px' }}>
        {Object.entries(moviesByGenre).map(([genre, genreMovies]) => (
          <div key={genre} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '1.8em',
              fontWeight: 'bold',
              margin: '0 50px 20px 50px',
              color: '#fff'
            }}>
              {genre}
            </h2>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              padding: '0 50px',
              gap: '10px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {genreMovies.map(movie => (
                <MovieCard 
                  key={movie.id} 
                  title={movie.title} 
                  year={movie.year}
                  genre={movie.genre}
                  rating={movie.rating}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
