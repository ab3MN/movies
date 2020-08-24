import React from 'react';
import T from 'prop-types';

const ReviewList = ({ items }) => (
  <ul>
    {items.map(({ id, author, content }) => (
      <li key={id}>
        <h3>{author}</h3>
        <p>{content}</p>
      </li>
    ))}
  </ul>
);

ReviewList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      author: T.string.isRequired,
      content: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewList;
