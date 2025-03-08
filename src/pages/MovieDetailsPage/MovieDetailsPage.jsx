import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}`;
      const options = {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQwMTViZmE2NzExNjYwNzI2MGQyN2Q2Njk3N2ZiYSIsIm5iZiI6MTc0MTQ0MzM3OS4yNDYsInN1YiI6IjY3Y2M1MTMzOWVmMGFjZGI4YjViYWJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WnoEbeHOLrFOyxEHUWdB9Rh5sL6Z6isqRq_qDPzALs" },
      };
      try {
        const response = await axios.get(url, options);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>Additional Info</h2>
      <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
