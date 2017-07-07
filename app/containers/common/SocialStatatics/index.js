import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from 'chart.js';
import _ from 'lodash';
import makeSelectSocialStatatics from './selectors';
import { getSocialGraphData } from './constants';
// import { fbData } from './../../../../spec/sample/fbData';
import './style.scss';

export class SocialStatatics extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    const { graphData } = getSocialGraphData();
    // const { yearCounts } = this.props.fbData;
    const insightScore = _.map(graphData, 'insight_score');
    const mnyLabels = _.map(graphData, 'mny');
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
        labels: mnyLabels,
        datasets: [
          {
            fill: true,
            data: insightScore,
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
      <div className="social-statatics">
        <canvas ref={(c) => this.revChart = c} />
      </div>
    );
  }
}

SocialStatatics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SocialStatatics: makeSelectSocialStatatics(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialStatatics);
