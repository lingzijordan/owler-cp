import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectWebsiteHistory from './selectors';

export class WebsiteHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="website-history">
      </div>
    );
  }
}

WebsiteHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WebsiteHistory: makeSelectWebsiteHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteHistory);
