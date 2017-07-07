import React from 'react';
import PropTypes from 'prop-types';
import CompanyLogo from './../CompanyLogo';
import CompanyDescription from './../CompanyDescription';
// import CompanyDescription from './../CompanyDescription';
// import styled from 'styled-components';


class CompanyHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      logoSrc,
      companyName,
      companyWebsite,
      descriptionSummary,
    } = this.props;
    return (
      <div className="company-header">
        <CompanyLogo logoSrc={logoSrc} companyName={companyName} />
        <CompanyDescription companyName={companyName} companyWebsite={companyWebsite} descriptionSummary={descriptionSummary} />
      </div>
    );
  }
}

CompanyHeader.propTypes = {
  companyName: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  descriptionSummary: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
};

export default CompanyHeader;
