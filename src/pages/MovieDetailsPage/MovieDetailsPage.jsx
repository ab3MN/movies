import React, { Component, Suspense } from 'react';
import { Route, Link } from 'react-router-dom';
import T from 'prop-types';

import * as API from '../../services/moviesAPI';
import routes from '../../Routes/Routes';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';
import getIdFromProps from '../../helpers/getIdFromProps';
import MovieLoader from '../../components/Loader/Loader';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func.isRequired,
      goBack: T.func.isRequired,
    }).isRequired,
    match: T.shape({
      url: T.string.isRequired,
      path: T.string.isRequired,
    }).isRequired,
    location: T.shape({
      key: T.string.isRequired,
    }).isRequired,
  };

  state = {
    movie: null,
    error: null,
  };

  componentDidMount() {
    this.fetchMovie();
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { location } = this.props;
    const { key } = location;

    if (key) {
      history.goBack();
      return;
    }
    history.push('/movies');
  };

  fetchMovie = () => {
    const id = getIdFromProps(this.props);
    API.getMovieDetails(id)
      .then(({ data }) => this.setState({ movie: data }))
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { match } = this.props;
    const { url, path } = match;
    const { movie, error } = this.state;
    return (
      <div>
        {error && <ErrorNotification text={error.message} />}
        {movie && <MovieDetails {...movie} onGoBack={this.handleGoBack} />}
        <hr />
        <h4>Additional information</h4>
        <ul>
          <div>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/review`}>Review</Link>
            </li>
          </div>
          <hr />
        </ul>

        <Suspense fallback={MovieLoader}>
          <Route
            path={`${path + routes.CAST_PAGE.path}`}
            component={routes.CAST_PAGE.component}
          />

          <Route
            path={`${path + routes.REVIEWS_PAGE.path}`}
            component={routes.REVIEWS_PAGE.component}
          />
        </Suspense>
      </div>
    );
  }
}
