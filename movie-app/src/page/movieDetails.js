import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}` // api 가져오기
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
      });
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <div>hi</div>}</div>;
}

export default MovieDetails;
