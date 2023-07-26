import MovieList from "../components/MovieList";

import SearchForm from "../components/SearchForm";
import useSearchMovies from "../custom-hooks/useSearchMovies";



const SearchPage = () =>{

    const {searchText, handleSearchText, handleSearchSubmit, searchMovies} =useSearchMovies();



    return(
        <>
            <SearchForm
            text = {searchText}
            placeholder = "영화 제목을 입력하세요."
            changeText = {handleSearchText}
            submit = {handleSearchSubmit}/>
            <div id = "wrap">
                {searchMovies.map((movie) => <MovieList key={movie.id} movie_info={movie}/>)}
            </div>
       </>
    )
}

export default SearchPage;