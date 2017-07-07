import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Form, Input } from 'reactstrap';
import makeSelectSearchForm from './selectors';
import SearchBar from './SearchBar';
import './index.scss';
const companies = [
  { name: 'Owler', description: 'The oldest breed of cat in the world!', image: 'https://s3.amazonaws.com/owler-image/logo/owler_owler_20170524_160642_original.png' },
  { name: 'Google', description: 'The largest wingspan of any bird!', image: 'https://s3.amazonaws.com/owler-image/logo/google_owler_20160623_063556_original.png' },
  { name: 'Facebook', description: 'There are 100 different species!', image: 'https://s3.amazonaws.com/owler-image/logo/facebook_owler_20160223_095029_original.png' },
  { name: 'Oracle', description: 'First evolved 100 million years ago!', image: 'https://s3.amazonaws.com/owler-image/logo/oracle_owler_20160223_073030_original.png' },
  { name: 'Twitter', description: 'Renew their horns every year!', image: 'https://s3.amazonaws.com/owler-image/logo/twitter_owler_20160223_094848_original.png' },
  { name: 'Twitch', description: 'Domesticated for hundreds of years!', image: 'https://s3.amazonaws.com/owler-image/logo/twitch_owler_20160226_164907_original.png' },
];
export class SearchForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onSearch = () => {}
  handleChange = (args) => {
    console.log('I was being changed with:', args);
  }
  render() {
    return (
      <div className="search-form">
        <SearchBar
          companies={companies}
          onChange={this.handleChange}
          inputName="search"
          onSearch={this.onSearch}
          placeholder="Search for any company..."
          defaultValue="facebook"
        />
      </div>
    );
  }
}

SearchForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SearchForm: makeSelectSearchForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
