import { Link, useLocation } from "react-router-dom"

function MovieList({ movies }) {
    const location = useLocation();
    return (
        <>
            <h1>Trending Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link state={location} to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MovieList