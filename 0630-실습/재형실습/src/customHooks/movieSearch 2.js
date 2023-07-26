import React from 'react';
import useSearchMovies from './useSearchMovies';

const MovieSearch = () => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    handleSearchQueryChange,
  } = useSearchMovies();

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Enter a movie title"
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
