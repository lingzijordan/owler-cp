import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card } from 'reactstrap';
import makeSelectCompanyStats from './selectors';
import Divider from './../../../components/UI/Divider';

export class CompanyStats extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fbData } = this.props;
    return (
      <div className="company-stats">
        <Card block inverse style={{ backgroundColor: '#FAFAFA', borderColor: '#FAFAFA', color: '#000000' }}>
          <div className="brief-head">Key stats</div>
          <Divider />
          <div className="revnue-info flex-column">
            <div className="left-block">
              <p>Revenue</p>
            </div>
            <div className="right-block">
              <p>{fbData.total_revenue}</p>
            </div>
          </div>
          <Divider />
          <div className="employees-info flex-column">
            <div className="left-block">
              <p>Total Employees</p>
            </div>
            <div className="right-block">
              <p>{fbData.total_employees}</p>
            </div>
          </div>
          <Divider />
          <div className="followers-info flex-column">
            <div className="left-block">
              <p>Followers on owler</p>
            </div>
            <div className="right-block">
              <p>{fbData.total_employees}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

CompanyStats.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fbData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  CompanyStats: makeSelectCompanyStats(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyStats);
