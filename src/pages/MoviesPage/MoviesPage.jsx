import React, { Component } from 'react';
import T from 'prop-types';
import queryString from 'query-string';

import * as API from '../../services/moviesAPI';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';

const getQueryFromLocation = location =>
  queryString.parse(location.search).query;

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
    query: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const query = getQueryFromLocation(location);
    if (query) {
      this.fetchMoviesByQuery(query);
    }
  }

  componentDidUpdate(p, s) {
    const { query } = this.state;
    if (s.query !== query) {
      if (!query) return;
      this.fetchMoviesByQuery(query);
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  fetchMoviesByQuery = query => {
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
