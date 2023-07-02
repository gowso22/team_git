import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

const useSearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]); // 검색어가 비어있는 경우 결과 초기화
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_1234567/${searchQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }

        const data = await response.json();
        setSearchResults(data); // 검색 결과 설정
      } catch (error) {
        setError(error.message); // 에러 정보 설정
      } finally {
        setLoading(false);
      }
    };

    searchMovies(); // 검색어가 변경될 때마다 영화 검색 함수 호출
  }, [searchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value); // 검색어 변경 핸들러
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    handleSearchQueryChange,
  };
};

export default useSearchMovies;
