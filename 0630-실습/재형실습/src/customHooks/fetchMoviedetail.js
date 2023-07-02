import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function useFetchMovieDetail(){

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [err, setErr] = useState("");

    const { id } = useParams();
  
    useEffect(() => {
        fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}` // api 가져오기
        )
          .then((response) => response.json())
          .then((json) => {
            setMovie(json.data.movie);
            setLoading(false);
          
          }).catch((error) => {
            setErr(error);
            setLoading(false);
            });
      }, []);

  

    return {loading, movie, err} ;
}


export default useFetchMovieDetail;