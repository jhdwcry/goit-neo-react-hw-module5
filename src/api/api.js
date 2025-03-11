import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQwMTViZmE2NzExNjYwNzI2MGQyN2Q2Njk3N2ZiYSIsIm5iZiI6MTc0MTQ0MzM3OS4yNDYsInN1YiI6IjY3Y2M1MTMzOWVmMGFjZGI4YjViYWJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4WnoEbeHOLrFOyxEHUWdB9Rh5sL6Z6isqRq_qDPzALs"

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export async function fetchMovies() {
    const responce = await axios.get(
        "/trending/movie/day?language=en-US"
    )
    return responce.data;
}

export async function fetchMoviesQuery(movieQuery) {
    const responce = await axios.get(`/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`)
    return responce.data;
}

export async function fetchMoviesById(movieId) {
    const responce = await axios.get(`/movie/${movieId}?language=en-US`)
    return responce.data;
}

export async function fetchMovieCast(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}
