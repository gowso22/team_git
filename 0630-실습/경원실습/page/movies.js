import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../css/style.css";

// useSearch 커스텀 훅
function useSearch(movies) {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태와 상태를 업데이트하는 함수 선언
  const [filteredMovies, setFilteredMovies] = useState([]); // 필터링된 영화 목록 상태 선언

  useEffect(() => {
    // 검색어나 영화 목록이 변경될 때마다 필터링된 영화 목록을 업데이트
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  const handleSearchQueryChange = (event) => {
    // 검색어 변경 핸들러 선언
    setSearchQuery(event.target.value);
  };

  // searchQuery를 반환
  // 필터링된 영화목록, 검색어변경, 현재 검색어 반환
  return [filteredMovies, handleSearchQueryChange, searchQuery];
}

function Movies() {
  const [loading, setLoading] = useState(true); // 로딩상태 선언
  const [movies, setMovies] = useState([]); // 영화 목록 상태 선언
  const [favorites, setFavorites] = useState([]);// 즐겨찾기 목록 상태 선언
  
  // useSearch 커스텀 훅 사용하여 필터링된 영화 목록과 검색어 변경핸들러, 현재검색어를 가져오기
  const [filteredMovies, handleSearchQueryChange, searchQuery] = useSearch(movies); 

  const [currentPage, setCurrentPage] = useState(1);// 현재 페이지 상태를 선언
  const [moviesPerPage] = useState(10); // 페이지당 영화 수를 선언한다

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

  const addToFavorites = (movieId) => {
    // 즐겨찾기에 영화 추가하기
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    // 즐겨찾기 영화 삭제
    const updatedFavorites = favorites.filter((m) => m.id !== movieId);
    setFavorites(updatedFavorites);
  };

  // Pagination
  const indexOfLastMovie = currentPage * moviesPerPage; // 마지막 영화의 인덱스 계산
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;// 첫번째 영화 인덱스 계산
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);// 현재 페이지에 표시할 영화 목록 가져오기

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage); // 총 페이지 수 계산

  const handleClickPage = (pageNumber) => {
    // 페이지 번호 클릭시 실행되는 핸들러 함수
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    // 페이지 번호 렌더링하는 함수
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => handleClickPage(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  

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
          {currentMovies.map((movie) => (
            <div key={movie.id} className="posterWrap">
              <Link to={`moviedeails/${movie.id}`}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} alt="영화 포스터 이미지" />
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </Link>
              <button onClick={() => addToFavorites(movie.id)}>즐겨찾기</button>
              <button onClick={() => removeFromFavorites(movie.id)}>즐겨찾기 삭제</button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  );
}

export default Movies;
