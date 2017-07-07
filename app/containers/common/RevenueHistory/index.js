import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from 'chart.js';
import _ from 'lodash';
import makeSelectRevenueHistory from './selectors';
import { getRevGraphData } from './constants';
import { fbData } from './../../../../spec/sample/fbData';
import './style.scss';

export class RevenueHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.createDateChart();
  }
  // TODO: make this as a sepearte utill function after getting all the statics for the graphs.
  createDateChart = () => {
    let ctx;
    if (this.revChart) {
      ctx = this.revChart;
    } else {
      return;
    }
    const { graphData } = getRevGraphData(fbData);
    // const { yearCounts } = this.props.fbData;
    const yearsArr = _.map(graphData, 'dny');
    const countArr = _.map(graphData, 'revenue');
    // debugger;
    /* eslint consistent-return: 0*/
    return new Chart(ctx, {
      type: 'line',
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
            fill: false,
            data: countArr,
            backgroundColor: 'transparent',
            borderColor: '#34BE8B',
          },
        ],
      },
    });
  }
  render() {
    /* eslint no-return-assign: 0 */
    return (
      <div className="revenue-history">
        <canvas ref={(c) => this.revChart = c} />
      </div>
    );
  }
}

RevenueHistory.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fbData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  RevenueHistory: makeSelectRevenueHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RevenueHistory);
