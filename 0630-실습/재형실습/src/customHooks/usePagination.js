import { useState } from 'react';
import { Route } from 'react-router-dom';

const usePagination = (totalPages) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    goToPage,
    nextPage,
    previousPage,
  };
};

export default usePagination;
