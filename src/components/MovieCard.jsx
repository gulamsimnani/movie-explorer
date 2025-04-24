// src/components/MovieCard.js
import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteToggle = () => {
    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-poster w-full h-72 object-cover mb-4 rounded-md"
      />
      <div className="movie-info text-center">
        <h3 className="font-semibold text-lg mb-2">{movie.Title}</h3>
        <p className="text-gray-500 mb-4">{movie.Year}</p>
        <button
          onClick={handleFavoriteToggle}
          className={`favorite-button px-4 py-2 rounded-md border-2 transition-colors ${
            isFavorite(movie.imdbID) ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {isFavorite(movie.imdbID) ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
