import React from 'react'
import useFetchMovies from '../custom-hooks/useFetchMovies';
import MovieList from '../components/MovieList';
import PageNation from '../components/PageNation'

import './../css/style.css';
import usePageNation from '../custom-hooks/usePagenation';

const Home = () => {
  const {loading, movies, err} = useFetchMovies();

  const {indexOfLast, indexofFirst, pageNumbers, setCurPage} = usePageNation();

 
  return(
    <div>
      {err && console.log(err)}
      {loading ? <h1>NOW Loading...</h1> :
                  <div id = "wrap"> 
                  { movies.slice(indexofFirst, indexOfLast).map((movie) => <MovieList key={movie.id} movie_info = {movie} />) }
                  </div>
                }
      <PageNation Nums = {pageNumbers} setPage = {setCurPage}/>
    </div>
  )


}

export default Home;