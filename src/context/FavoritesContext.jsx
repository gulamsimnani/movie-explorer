import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext();  // Context is created

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorites = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (movieId) => {
    const newFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId);
  };

  return (
    <FavoritesContext.Provider value={{ addToFavorites, removeFromFavorites, isFavorite, favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
