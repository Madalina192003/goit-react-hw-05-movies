import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '../../services/api';
import './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const reviewsData = await fetchMovies(movieId, 'reviews');
        setReviews(reviewsData);
      } catch (err) {
        setError('A apărut o eroare la încărcarea recenziilor filmului');
      }
    };

    loadReviews();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!reviews.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Recenzii</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
