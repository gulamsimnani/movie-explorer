import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query); // Trigger search when button is clicked
  };

  return (
    <div className="search-container flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-md"
        placeholder="Search movies..."
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
