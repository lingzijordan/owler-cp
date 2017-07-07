import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
