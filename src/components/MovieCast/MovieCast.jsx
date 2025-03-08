import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
      const options = { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQwMTViZmE2NzExNjYwNzI2MGQyN2Q2Njk3N2ZiYSIsIm5iZiI6MTc0MTQ0MzM3OS4yNDYsInN1YiI6IjY3Y2M1MTMzOWVmMGFjZGI4YjViYWJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WnoEbeHOLrFOyxEHUWdB9Rh5sL6Z6isqRq_qDPzALs" } };
      try {
        const response = await axios.get(url, options);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.movieCastList}>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
