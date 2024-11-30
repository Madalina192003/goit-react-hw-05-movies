import { useState } from 'react';
import fetchMovies from '../../services/api';
import MovieList from '../MovieList/MovieList';
import './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const moviesData = await fetchMovies(query);
      setMovies(moviesData);
    } catch (err) {
      setError('A apărut o eroare la căutarea filmelor');
    }
  };

  return (
    <div>
      <h1>Caută filme</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Caută filme..."
        />
        <button type="submit">Caută</button>
      </form>
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
