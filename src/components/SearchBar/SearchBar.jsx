import React, { Component } from 'react';
import T from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={value}
          type="text"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
