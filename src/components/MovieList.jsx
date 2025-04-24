import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { useFetch } from '../hooks/useFetch';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const { fetchMovies } = useFetch();

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery).then((data) => {
        setMovies(data);
      });
    }
  }, [searchQuery, fetchMovies]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {movies?.length === 0 ? (
        <div>No movies found</div>
      ) : (
        movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;
