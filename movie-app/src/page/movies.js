import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` // api 가져오기
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
        //console.log(json.data.movies);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`moviedeails/:${movie.id}`}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} />
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
