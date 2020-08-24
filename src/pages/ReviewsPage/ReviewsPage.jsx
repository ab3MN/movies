import React, { Component } from 'react';
import * as API from '../../services/moviesAPI';
import getIdFromProps from '../../helpers/getIdFromProps';
import ReviewList from '../../components/Review/Review';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';

export default class ReviewsPage extends Component {
  state = {
    items: [],
    error: null,
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const id = getIdFromProps(this.props);
    API.getMovieReviews(id)
      .then(({ data }) => this.setState({ items: data.results }))
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { items, error } = this.state;
    return (
      <>
        {error && <ErrorNotification text={error} />}

        {items.length > 0 ? (
          <ReviewList items={items} />
        ) : (
          <h3>We don&apos;t have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
