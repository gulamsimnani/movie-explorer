import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import FavoritesPage from './components/FavoritesPage';
import SearchInput from './components/SearchInput';
import { FavoritesProvider } from './context/FavoritesContext'; // Import the provider

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <FavoritesProvider>  {/* Wrap everything inside FavoritesProvider */}
      <Router>
        <div className="App">
           {/* Navbar */}
        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Movie Explorer</h1>
          <div className="space-x-4">
            <Link to="/favorites" className="hover:underline">Favorites</Link>
          </div>
        </nav>
          <SearchInput onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<MovieList searchQuery={searchQuery} />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
