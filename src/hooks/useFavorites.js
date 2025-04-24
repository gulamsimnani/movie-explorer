import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'; // Correct path

export const useFavorites = () => {
  return useContext(FavoritesContext); // Return the context value
};
