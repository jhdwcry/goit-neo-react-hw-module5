import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import css from "./HomePage.module.css"

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day";
      const options = {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQwMTViZmE2NzExNjYwNzI2MGQyN2Q2Njk3N2ZiYSIsIm5iZiI6MTc0MTQ0MzM3OS4yNDYsInN1YiI6IjY3Y2M1MTMzOWVmMGFjZGI4YjViYWJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WnoEbeHOLrFOyxEHUWdB9Rh5sL6Z6isqRq_qDPzALs",
        },
      };
      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul className={css.homePageList}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link className={css.homePageListItem} to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
