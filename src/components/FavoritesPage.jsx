import { useFavorites } from '../hooks/useFavorites'; // Correct path to the custom hook

const FavoritesPage = () => {
  const { removeFromFavorites, favorites } = useFavorites(); // Destructure context values, no need for addToFavorites

  return (
    <div className="favorites-page p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite movies yet!</p>
      ) : (
        <ul className="movie-list space-y-4">
          {favorites.map((movie) => (
            <li key={movie.imdbID} className="movie-item bg-white p-4 rounded-md shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{movie.Title}</h3>
                <p className="text-gray-500">{movie.Year}</p>
              </div>
              <button
                onClick={() => removeFromFavorites(movie.imdbID)} 
                className="remove-button bg-red-500 text-white px-4 py-2 rounded-md transition-colors hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
