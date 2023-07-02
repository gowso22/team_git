import React from 'react';
import usePagination from './usePaginationFull';
import { Link } from 'react-router-dom';
 
const MovieApp = () => {
  const totalPages = 10; // 전체 페이지 수
  const { currentPage, goToPage, nextPage, previousPage } = usePagination(totalPages);

  return (
    <div>
      <h1>Movie App</h1>
      <p>Current Page: {currentPage}</p>
      <button onClick={() => goToPage(1)}>First</button>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      <button onClick={() => goToPage(totalPages)}>Last</button>
    </div>
  );
};

export default MovieApp;
