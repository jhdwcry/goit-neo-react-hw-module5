import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import css from "./MoviesPage.module.css"

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const options = {
      headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQwMTViZmE2NzExNjYwNzI2MGQyN2Q2Njk3N2ZiYSIsIm5iZiI6MTc0MTQ0MzM3OS4yNDYsInN1YiI6IjY3Y2M1MTMzOWVmMGFjZGI4YjViYWJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WnoEbeHOLrFOyxEHUWdB9Rh5sL6Z6isqRq_qDPzALs" },
    };
    try {
      const response = await axios.get(url, options);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input className={css.input} value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className={css.movieSearchBtn} type="submit">Search</button>
      </form>
      <ul className={css.moviesSearchList}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
