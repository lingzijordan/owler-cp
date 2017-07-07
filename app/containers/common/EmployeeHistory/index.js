import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from 'chart.js';
import _ from 'lodash';
import makeSelectEmployeeHistory from './selectors';
import { getEmpGraphData } from './constants';
import { fbData } from './../../../../spec/sample/fbData';
import './style.scss';

export class EmployeeHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.createEmpChart();
  }
  // TODO: make this as a sepearte utill function after getting all the statics for the graphs.
  createEmpChart = () => {
    let ctx;
    if (this.revChart) {
      ctx = this.revChart;
    } else {
      return;
    }
    const { graphData } = getEmpGraphData(fbData);
    // const { yearCounts } = this.props.fbData;
    const yearsArr = _.map(graphData, 'dny');
    const countArr = _.map(graphData, 'emp');
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
      <div className="employee-history">
        <canvas ref={(c) => this.revChart = c} />
      </div>
    );
  }
}

EmployeeHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EmployeeHistory: makeSelectEmployeeHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeHistory);
