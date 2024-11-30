import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import fetchMovies from '../../services/api';
import './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieData = await fetchMovies('', movieId);
        setMovie(movieData);
      } catch (err) {
        setError('A apărut o eroare la încărcarea detaliilor filmului');
      }
    };

    loadMovie();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movieDetails">
      <h1>{movie.title}</h1>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <p>Poster indisponibil</p>
      )}
      <p>{movie.overview}</p>
      <Link to={`cast`}>Distribuție</Link>
      <Link to={`reviews`}>Recenzii</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
