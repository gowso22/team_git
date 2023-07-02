import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../css/movieDetails.module.css";

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

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

  // 뒤로가기 클릭
  const handleBackPage = () => {
    navigate(-1);
  }
  
  return (
    <div>
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
          {/* 뒤로가기 생성 */}
          <h5 onClick={handleBackPage}>목록으로</h5>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
