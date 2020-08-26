import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../Routes/Routes';
import styles from './MovieList.module.css';

const MoviesList = ({ items }) => (
  <ul className={styles.movieList}>
    {items.map(i => (
      <li key={i.id} className={styles.movieItem}>
        <Link to={`${routes.MOVIES_PAGE.path}/${i.id}`}>
          {i.title ? i.title : i.name}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
      title: T.string,
    }).isRequired,
  ).isRequired,
};

export default MoviesList;
