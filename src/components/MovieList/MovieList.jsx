import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className="movieList">
      {movies.map(movie => (
        <li key={movie.id} className="movieListItem">
          <a href={`/movies/${movie.id}`}>{movie.title}</a>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
