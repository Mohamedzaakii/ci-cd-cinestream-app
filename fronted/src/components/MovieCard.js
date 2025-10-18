import React from 'react';

const moviePosters = {
  "Inception": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  "Interstellar": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "The Dark Knight": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  "Pulp Fiction": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzJjNDymmYzgyZGYXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "Fight Club": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
  "The Matrix": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "Forrest Gump": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "The Shawshank Redemption": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "The Godfather": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "Avengers: Endgame": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  "Spirited Away": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "Parasite": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
};

function MovieCard({ title, year, genre, rating }) {
  const posterUrl = moviePosters[title] || `https://via.placeholder.com/300x450/2d2d2d/ffffff?text=${encodeURIComponent(title)}`;

  return (
    <div
      style={{
        position: 'relative',
        background: '#141414',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '220px',
        margin: '0 10px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        flexShrink: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.zIndex = '10';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.zIndex = '1';
      }}
    >
      <img
        src={posterUrl}
        alt={title}
        style={{
          width: '100%',
          height: '330px',
          objectFit: 'cover',
          display: 'block'
        }}
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/300x450/2d2d2d/ffffff?text=${encodeURIComponent(title)}`;
        }}
      />
      <div style={{
        padding: '15px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        color: 'white'
      }}>
        <h4 style={{ 
          margin: '0 0 5px 0', 
          fontSize: '16px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {title}
        </h4>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          color: '#ccc'
        }}>
          <span>{year}</span>
          <span style={{
            background: '#e50914',
            padding: '2px 6px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '12px'
          }}>
            ⭐ {rating}
          </span>
        </div>
        <span style={{
          fontSize: '12px',
          color: '#999'
        }}>
          {genre}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
