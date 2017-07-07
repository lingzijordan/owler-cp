import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCompanyAcquisitions from './selectors';

export class CompanyAcquisitions extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="company-acquisitions">
      </div>
    );
  }
}

CompanyAcquisitions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CompanyAcquisitions: makeSelectCompanyAcquisitions(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAcquisitions);
