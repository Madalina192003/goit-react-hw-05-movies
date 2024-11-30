import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '../../services/api';
import './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCast = async () => {
      try {
        const castData = await fetchMovies(movieId, 'cast');
        setCast(castData);
      } catch (err) {
        setError('A apărut o eroare la încărcarea distribuției filmului');
      }
    };

    loadCast();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!cast.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Distribuție</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
