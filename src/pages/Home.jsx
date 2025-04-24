import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import MovieList from '../components/MovieList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home-page">
      <SearchInput onSearch={setSearchQuery} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
