import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../Routes/Routes';

const MoviesList = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i.id}>
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
