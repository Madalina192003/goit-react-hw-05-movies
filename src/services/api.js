const API_KEY = '48b9c272a5afb0debc8843cdd7638bc2';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (query = '', movieId = null) => {
  try {
    const url = movieId
      ? `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      : query
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
      : `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.status_message || 'A apărut o eroare');
    }

    return movieId ? data : data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export default fetchMovies;
