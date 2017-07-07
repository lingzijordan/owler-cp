// import _ from 'lodash';
export const DEFAULT_ACTION = 'app/RevenueHistory/DEFAULT_ACTION';

export const getRevGraphData = (fbData) => {
  const graphData = [];
  fbData.revenue_info.forEach((x) => {
    graphData.push({
      dny: x.display_date,
      revenue: x.revenue,
    });
  });
  graphData.sort((a, b) => {
    const dateA = a.dny.split('/')[1];
    const dateB = b.dny.split('/')[1];
    return dateA - dateB;
  });
  return { graphData };
};
