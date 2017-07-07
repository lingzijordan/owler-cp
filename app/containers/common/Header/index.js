import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import makeSelectHeader from './selectors';
import SearchForm from './../SearchForm';
import Logo from './../../../components/Logo';
import RightNav from './../../../components/RightNav';
import './index.scss';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm />
        <RightNav />
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
