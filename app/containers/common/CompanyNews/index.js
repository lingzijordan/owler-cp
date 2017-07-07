import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from 'chart.js';
import _ from 'lodash';
import makeSelectCompanyNews from './selectors';
import { getNewsGraphData } from './constants';
// import { fbData } from './../../../../spec/sample/fbData';
import './style.scss';

export class CompanyNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.createNewsChart();
  }
  // TODO: make this as a sepearte utill function after getting all the statics for the graphs.
  createNewsChart = () => {
    let ctx;
    if (this.revChart) {
      ctx = this.revChart;
    } else {
      return;
    }
    const { graphData } = getNewsGraphData();
    // const { yearCounts } = this.props.fbData;
    const insightScore = _.map(graphData, 'insight_score');
    const insightName = _.map(graphData, 'name');
    // debugger;
    /* eslint consistent-return: 0*/
    return new Chart(ctx, {
      type: 'pie',
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
        labels: insightName,
        datasets: [
          {
            fill: true,
            data: insightScore,
            backgroundColor: ['#90BF54', '#0078B7', '#143F69', '#F76B38'],
            borderColor: '#FFFFFF',
          },
        ],
      },
    });
  }
  render() {
    /* eslint no-return-assign: 0 */
    return (
      <div className="company-news">
        <canvas ref={(c) => this.revChart = c} />
      </div>
    );
  }
}

CompanyNews.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CompanyNews: makeSelectCompanyNews(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNews);
