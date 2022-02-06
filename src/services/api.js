

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '86df994fc1da9fa91c8ed05c97ff5a2c';


async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
   return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}
  
export function fetchSearchMovie(searchQuery) {
    return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`,
  );
}

export function fetchMovieDetails(movie_id) {
    return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCredits(movie_id) {
    return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}


export function fetchMovieReviews(movie_id) {
    return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}