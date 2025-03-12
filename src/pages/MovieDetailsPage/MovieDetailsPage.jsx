import { useEffect, useRef, useState } from "react"
import { useParams, Link, useLocation, Outlet } from "react-router-dom"
import { fetchMoviesById } from "../../api/api"
import css from './MovieDetailsPage.module.css'

const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);
    useEffect(() => { fetchMoviesById(movieId).then(data => setMovie(data)) }, [movieId]);

    const location = useLocation();
    const goBackLink = useRef(location.state ?? '/')

    return (
        <div>
            {movie && <>
                <img
                    src={
                        movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    width={250}
                    alt="poster"
                />
                <h2>{movie.title}</h2>
                
            </>}
            <Link className={css.movieDetailsLink}  to={goBackLink.current}>Go back</Link>
            <Link className={css.movieDetailsLink} to='cast'>Cast</Link>
            <Link  className={css.movieDetailsLink} to='reviews'>Reviews</Link>
            <Outlet/>
        </div>
    )
}

export default MovieDetailsPage