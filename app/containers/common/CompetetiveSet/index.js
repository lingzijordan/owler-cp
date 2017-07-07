import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card, Table } from 'reactstrap';
import makeSelectCompetetiveSet from './selectors';
import Divider from './../../../components/UI/Divider';
import { competeSet } from './constants';
export class CompetetiveSet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { fbData } = this.props;
    return (
      <div className="competetive-set">
        <Card block inverse style={{ backgroundColor: '#FAFAFA', borderColor: '#FAFAFA', color: '#000000' }}>
          <div className="competetive-set-head">Top competetors</div>
          <Divider />
          <div className="competetive-set-block">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company</th>
                  <th>Leadership</th>
                  <th>CEO Rank</th>
                  <th>Employees<br />(Estimated if private)</th>
                  <th>Total funding</th>
                  <th>Revenue <br />(Estimated if private)</th>
                  <th>Likely outcome</th>
                </tr>
              </thead>
              <tbody>
                {competeSet.map((x, i) =>
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td><img alt={x.name} src={x.image} height="40" width="200" /></td>
                    <td>{x.ceo}</td>
                    <td>{x.ceo_rank}</td>
                    <td>{x.total_employees}</td>
                    <td>{x.total_funding}</td>
                    <td>{x.total_revenue}</td>
                    <td>{x.total_revenue}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    );
  }
}

CompetetiveSet.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fbData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  CompetetiveSet: makeSelectCompetetiveSet(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetetiveSet);
