import React from "react";
import styles from "../css/movieDetails.module.css";
import useFetchMovieDetail from "../custom-hooks/userFetchMovieDetail";

function Detail() {
 
  const {loading, movie, err} = useFetchMovieDetail();

 

  return (
    <div>
      {err && console.log(err)};
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movie_detail}
              style={{
                backgroundImage : `url(${movie.background_img})`,
              }}>
          <div className={styles.movie_card}>
            <h2 className={styles.title_text}>{movie.title}({movie.year})</h2>
            <div className={styles.movie_line}>
              <img className={styles.detail_img} src={movie.medium_cover_image} alt = "영화 이미지"/>
              <p>{movie.description_intro.length > 350 ? 
                  `${movie.description_intro.slice(0,350)} ... ` : movie.description_intro}</p>
            </div>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>평점 : <span className = {styles.rating}>{movie.rating}</span> / 10</p>
          </div>
        
        </div>
      )}
    </div>
  );
}

export default Detail;
