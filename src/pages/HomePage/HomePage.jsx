import React, { Component } from 'react';
import * as API from '../../services/moviesAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';

export default class Home extends Component {
  state = {
    movies: null,
    error: null,
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = () => {
    API.getTrendingMovies()
      .then(({ data }) =>
        this.setState({
          movies: data.results,
        }),
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const { movies, error } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        {error && <ErrorNotification text={error.message} />}
        {movies && <MoviesList items={movies} />}
      </div>
    );
  }
}
