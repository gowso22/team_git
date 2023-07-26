/* 
 설계
  조건 => 로딩 상태, 영화 데이터, 에러 정보 등을 포함하는 객체를 반환 받아야 하므로
  상태 값을 로딩 상태, 영화데이터 배열, 에러정보에 대한 상태 등으로 선언
  사용할 함수는 useEffect를 사용하여 영화 데이터 값을 받아옴.
*/

/*
  loading => 로딩 상태를 알려주는 상태값
  movies => 받아온 영화 데이터를 가지고 있는 배열 상태값  
  err => 에러 정보를 받아올 상태값


  useEffect => 영화 데이터를 받아올 react hook, 페이지가 새로고침 될때 1번만 받아오도록 설정
*/



/* 구현 */
import  { useEffect, useState } from 'react';



function useFetchMovies(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState("");
  
    useEffect(() => {
        fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` // api 가져오기
      )
        .then((response) => response.json())
        .then((json) => {
          setMovies(json.data.movies);
          setLoading(false);
         
        }).catch((error) => {
          setErr(error);
          setLoading(false);
        });
    }, [])

  

    return {loading, movies, err} ;
}


export default useFetchMovies;