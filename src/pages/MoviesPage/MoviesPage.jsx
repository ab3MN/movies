import React, { Component } from 'react';
import T from 'prop-types';

import * as API from '../../services/moviesAPI';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';

export default class MoviesPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func.isRequired,
    }).isRequired,
    location: T.shape({
      pathname: T.string.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
    error: null,
  };

  handleSubmit = query => {
    const { history, location } = this.props;
    API.getMoviesByQuery(query)
      .then(({ data }) => this.setState({ movies: data.results }))
      .then(
        history.push({
          pathname: location.pathname,
          search: `query=${query}`,
        }),
      )
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { movies, error } = this.state;
    return (
      <>
        {error && <ErrorNotification text={error.message} />}

        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList items={movies} />
      </>
    );
  }
}
