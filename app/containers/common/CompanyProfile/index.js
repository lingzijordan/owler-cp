import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCompanyProfile from './selectors';
import CompanyStats from './../CompanyStats';
import CompanyCompetetors from './../CompanyCompetetors';
import CompanyHeader from './../../../components/CompanyHeader';
import { fbData } from './../../../../spec/sample/fbData';
import Brief from './Brief';
import './index.scss';

export class CompanyProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(fbData);
    return (
      <div className="company-profile">
        <CompanyHeader
          companyName={fbData.name}
          logoSrc={fbData.logo}
          companyWebsite={fbData.website}
          descriptionSummary={fbData.description}
        />
        <div className="profile">
          <div className="brief-info">
            <Brief fbData={fbData} />
          </div>
          <div className="company-stats">
            <CompanyStats fbData={fbData} />
          </div>
          <div className="competetive-set">
            <CompanyCompetetors fbData={fbData} />
          </div>
        </div>
      </div>
    );
  }
}

CompanyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CompanyProfile: makeSelectCompanyProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
