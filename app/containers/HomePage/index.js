import React from 'react';
import Header from './../common/Header';
import CompanyProfile from './../common/CompanyProfile';
import CompetetiveSet from './../common/CompetetiveSet';
import RevenueHistory from './../common/RevenueHistory';
import EmployeeHistory from './../common/EmployeeHistory';
import FundingHistory from './../common/FundingHistory';
import CompanyNews from './../common/CompanyNews';
import SocialStatatics from './../common/SocialStatatics';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="home-page">
        <Header />
        <CompanyProfile />
        <CompetetiveSet />
        <RevenueHistory />
        <EmployeeHistory />
        <FundingHistory />
        <CompanyNews />
        <SocialStatatics />
      </div>
    );
  }
}
