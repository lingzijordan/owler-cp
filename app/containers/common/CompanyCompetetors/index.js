import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card } from 'reactstrap';
import makeSelectCompanyCompetetors from './selectors';
import Divider from './../../../components/UI/Divider';

export class CompanyCompetetors extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fbData } = this.props;
    return (
      <div className="company-competetors">
        <Card block inverse style={{ backgroundColor: '#FAFAFA', borderColor: '#FAFAFA', color: '#000000' }}>
          <div className="competetors-head">Top competetors</div>
          <Divider />
          <div className="competetors-block">
            <ul>
              {fbData.competitor_list.map((x, i) => <ol key={i}>{x.competitor_id}</ol>)}
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}

CompanyCompetetors.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fbData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  CompanyCompetetors: makeSelectCompanyCompetetors(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetetors);
