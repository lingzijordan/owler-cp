import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCards from './selectors';

export class Cards extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="cards">
      </div>
    );
  }
}

Cards.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Cards: makeSelectCards(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
