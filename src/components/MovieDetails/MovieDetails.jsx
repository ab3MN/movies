import React from 'react';
import T from 'prop-types';

const posterimgpath = `https://image.tmdb.org/t/p/w342/`;

const MovieDetails = ({
  title,
  genres,
  poster_path,
  vote_average,
  overview,
  onGoBack,
}) => (
  <article>
    <div>
      <button type="button" onClick={onGoBack}>
        &#11013;Go Back
      </button>
      <img src={posterimgpath + poster_path} alt={title} />
    </div>

    <h2>{title}</h2>
    <p>User Score:{`${vote_average * 10}%`}</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    <ul>
      {genres.map(g => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  </article>
);

MovieDetails.propTypes = {
  onGoBack: T.func.isRequired,
  title: T.string.isRequired,
  poster_path: T.string.isRequired,
  vote_average: T.number.isRequired,
  overview: T.string.isRequired,
  genres: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
      name: T.string.isRequired,
    }),
  ).isRequired,
};

export default MovieDetails;
