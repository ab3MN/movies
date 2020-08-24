/* eslint-disable camelcase */
import React from 'react';
import T from 'prop-types';

const imgpath = 'https://image.tmdb.org/t/p/w185';

const CastList = ({ items }) => (
  <ul>
    {items.map(({ id, profile_path, name, character }) => (
      <li key={id}>
        {profile_path && <img src={imgpath + profile_path} alt={name} />}
        <h4>{name}</h4>
        <p>{character}</p>
      </li>
    ))}
  </ul>
);

CastList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
      name: T.string.isRequired,
      character: T.string.isRequired,
      profile_path: T.string,
    }).isRequired,
  ).isRequired,
};

export default CastList;
