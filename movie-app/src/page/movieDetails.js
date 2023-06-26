import React, { useEffect, useState } from "react";
function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const queryParams = new URLSearchParams(movies.id);
  const query = queryParams.get("query");

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=??`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <div>{query}</div>}</div>;
}

export default MovieDetails;
