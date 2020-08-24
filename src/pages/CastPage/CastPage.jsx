import React, { Component } from 'react';
import * as API from '../../services/moviesAPI';
import getIdFromProps from '../../helpers/getIdFromProps';
import CastList from '../../components/Cast/Cast';
import ErrorNotification from '../../components/ErrorNotification/ErrorNotification';

export default class CastPage extends Component {
  state = {
    cast: null,
    error: null,
  };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = () => {
    const id = getIdFromProps(this.props);
    API.getMovieCast(id)
      .then(({ data }) => this.setState({ cast: data.cast }))
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { cast, error } = this.state;

    return (
      <>
        {error && <ErrorNotification text={error.message} />}

        {cast && <CastList items={cast} />}
      </>
    );
  }
}
