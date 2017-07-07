import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class CompanyLogo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="company-logo">
        <img src={this.props.logoSrc} alt={this.props.companyName} />
      </div>
    );
  }
}

CompanyLogo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default CompanyLogo;
