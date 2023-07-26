/*
  설계
    검색어 상태값과, 검색어 변경에 따른 이벤트 핸들러, formsubmit 핸들러, 에러정보, 검색한 영화 목록 데이터 관리
    하고 상태값을 반환하도록 함.
*/

/*
  serachText => 검색어 상태값
  searchMovies => 검색어에 따른 영화 데이터 배열 
  err => 에러 정보 상태값

  handleSearchText => input type ="text"의 value 이벤트 핸들러

  handleSearchSubmit => 검색어 따라 영화데이터를 호출할 이벤트 핸들러
 */

/* 구현 */
import { useState } from "react";

const useSearchMovies = () =>{

    const [searchText, setSearchText] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const [err, setErr] = useState("");
  
    const handleSearchText = (e) => {
      setSearchText(e.target.value)
    }
  
    
    const handleSearchSubmit = (e) => {
  
        e.preventDefault();
     
        fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${searchText}`)
        .then((response) => response.json())
        .then((json) => {
            setSearchMovies(json.data.movies);
          }).catch((error) => {
            setErr(error);
          });
    
  
    }

    return {searchText, handleSearchText, handleSearchSubmit, searchMovies, err}

}

export default useSearchMovies;