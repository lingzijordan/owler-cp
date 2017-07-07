import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCompanyPortfolio from './selectors';

export class CompanyPortfolio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="company-portfolio">
      </div>
    );
  }
}

CompanyPortfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CompanyPortfolio: makeSelectCompanyPortfolio(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPortfolio);
