import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-upcoming-card">
    <h3>{movie.title}</h3>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <p>Overview: {movie.overview}</p>
    <p>Release Date: {movie.release_date}</p>
  </div>
);

export default MovieCard;
