import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function CompanyDescription(props) {
  return (
    <div className="company-description">
      <div className="description-heading">
        <h4>{props.companyName}</h4> | <h4>{props.companyWebsite}</h4>
      </div>
      <div className="description-summary">
        <p>{props.descriptionSummary}</p>
      </div>
    </div>
  );
}

CompanyDescription.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
  descriptionSummary: PropTypes.string.isRequired,
};

export default CompanyDescription;
