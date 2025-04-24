// import { useCallback } from 'react';

// export const useFetch = () => {
//   const fetchMovies = useCallback(async (query) => {
//     const API_KEY = "e27c03ef";
//     const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
//     const data = await response.json();
//     return data.Search || [];
//   }, []);

//   return { fetchMovies };
// };



// import { useState } from 'react';

// export const useFetch = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchMovies = async (query) => {
//     setLoading(true);
//     setError(null);

//     try {
//         const API_KEY = "e27c03ef";
//         const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
//     //   const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
//       const data = await response.json();
//       setLoading(false);
//       return data.Search || []; // returns an empty array if no results found
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//       return [];
//     }
//   };

//   return { fetchMovies, loading, error };
// };


import { useState } from 'react';

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = "e27c03ef";
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      console.log('Fetched data:', data); // Debugging line
      setLoading(false);
      if (data.Response === "True") {
        return data.Search || []; // Return an empty array if no movies found
      } else {
        return [];
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return [];
    }
  };

  return { fetchMovies, loading, error };
};


