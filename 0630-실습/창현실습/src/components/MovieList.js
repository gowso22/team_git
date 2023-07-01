import { Link } from "react-router-dom";

import './../css/style.css';


const MovieList = ({movie_info}) => {
    
    const {id, title, genres, medium_cover_image} = movie_info;


    return(
        <div className="posterWrap">
        <Link to={`/moviedeails/${id}`}>
          <h2>{title}</h2>
          <img src={medium_cover_image} alt={title}/>
          </Link>
          <ul>
            {genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
      </div>
    )
}


export default MovieList;