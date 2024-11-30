import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchMovies from '../../services/api';
import './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (err) {
        setError('A apărut o eroare la încărcarea filmelor');
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="home">
      <h1>Trending now</h1>
      {error && <p>{error}</p>}
      <ul className="movieList">
        {movies.map(movie => (
          <li key={movie.id} className="movieListItem">
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
