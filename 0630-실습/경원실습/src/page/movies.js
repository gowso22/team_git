import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../css/style.css";

// 커스텀 훅: 검색 기능 제공
function useSearch(movies) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // 검색어나 영화 목록이 변경될 때마다 필터링된 영화 목록을 업데이트
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  const handleSearchQueryChange = (event) => {
    // 검색어 변경 핸들러
    setSearchQuery(event.target.value);
  };

  return [filteredMovies, handleSearchQueryChange, searchQuery];
}

// 커스텀 훅: 즐겨찾기 기능 제공
function useFavorites(movies) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movieId) => {
    // 즐겨찾기에 영화 추가
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    // 즐겨찾기에서 영화 삭제
    const updatedFavorites = favorites.filter((m) => m.id !== movieId);
    setFavorites(updatedFavorites);
  };

  return [favorites, addToFavorites, removeFromFavorites];
}

// 커스텀 훅: 페이지네이션 기능 제공
function usePagination(moviesPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    // 페이지 번호 클릭시 실행되는 핸들러 함수
    setCurrentPage(pageNumber);
  };

  const getPageSlice = (items) => {
    // 현재 페이지에 표시할 영화 목록 가져오기
    const indexOfLastItem = currentPage * moviesPerPage;
    const indexOfFirstItem = indexOfLastItem - moviesPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const getTotalPages = (items) => {
    // 총 페이지 수 계산
    return Math.ceil(items.length / moviesPerPage);
  };

  return [currentPage, handlePageClick, getPageSlice, getTotalPages];
}

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useSearch 커스텀 훅 사용하여 필터링된 영화 목록과 검색어 변경 핸들러, 현재 검색어 가져오기
  const [filteredMovies, handleSearchQueryChange, searchQuery] = useSearch(
    movies
  );
  // useFavorites 커스텀 훅 사용하여 즐겨찾기 목록과 추가/삭제 함수 가져오기
  const [favorites, addToFavorites, removeFromFavorites] = useFavorites();
  // usePagination 커스텀 훅 사용하여 페이지네이션 관련 상태와 함수 가져오기
  const [currentPage, handlePageClick, getPageSlice, getTotalPages] =
    usePagination(10);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Movie</h1>
      </header>

      <h2>Favorites:</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="검색어를 입력하세요"
      />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="wrap">
          {getPageSlice(filteredMovies).map((movie) => (
            <div key={movie.id} className="posterWrap">
              <Link to={`moviedetails/${movie.id}`}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} alt="영화 포스터 이미지" />
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </Link>
              <button onClick={() => addToFavorites(movie.id)}>즐겨찾기</button>
              <button onClick={() => removeFromFavorites(movie.id)}>
                즐겨찾기 삭제
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: getTotalPages(filteredMovies) }).map((_, i) => (
          <li
            key={i + 1}
            className={i + 1 === currentPage ? "active" : ""}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
