import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/api"; // Імпортуємо функцію запиту

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
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
