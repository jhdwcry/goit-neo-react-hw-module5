import { useSearchParams } from "react-router-dom"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useEffect, useState } from "react";
import { fetchMoviesQuery } from '../../api/api'
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    function handleSearch(query) {
        setSearchParams({query})
    }

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) {
            return;
        }
        fetchMoviesQuery(query).then((data) => setMovies(data.results));
        console.log(searchParams);
    }, [searchParams])

    return (
        <div>
            <SearchForm onSearch={handleSearch} />
            <MovieList movies={movies}/>
        </div>
    )
}

export default MoviesPage