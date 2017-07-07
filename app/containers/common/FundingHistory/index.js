import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Chart from 'chart.js';
import _ from 'lodash';
import makeSelectFundingHistory from './selectors';
import { getFundingGraphData } from './constants';
import { fbData } from './../../../../spec/sample/fbData';
import './style.scss';

export class FundingHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.createFundingChart();
  }
  // TODO: make this as a sepearte utill function after getting all the statics for the graphs.
  createFundingChart = () => {
    let ctx;
    if (this.revChart) {
      ctx = this.revChart;
    } else {
      return;
    }
    const { graphData } = getFundingGraphData(fbData);
    // const { yearCounts } = this.props.fbData;
    const yearsArr = _.map(graphData, 'dny');
    const countArr = _.map(graphData, 'amount');
    // debugger;
    /* eslint consistent-return: 0*/
    return new Chart(ctx, {
      type: 'bar',
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        // tooltips: {
        //   enabled: false,
        // },
        title: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        },
      },
      data: {
        labels: yearsArr,
        datasets: [
          {
            fill: true,
            data: countArr,
            backgroundColor: '#34BE8B',
            borderColor: '#34BE8B',
          },
        ],
      },
    });
  }
  render() {
    /* eslint no-return-assign: 0 */
    return (
      <div className="funding-history">
        {/* <Helmet
          title="FundingHistory"
          meta={[
            { name: 'description', content: 'Description of FundingHistory' },
          ]}
        /> */}
        <canvas ref={(c) => this.revChart = c} />
      </div>
    );
  }
}

FundingHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FundingHistory: makeSelectFundingHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FundingHistory);
