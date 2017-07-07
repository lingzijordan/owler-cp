// import _ from 'lodash';
export const DEFAULT_ACTION = 'app/CompanyNews/DEFAULT_ACTION';

export const getNewsGraphData = () => {
  // const graphData = [];
  // No logic for now as there isn't more clarity about the sources.
  const graphData = [
    {
      insight_score: 35,
      name: 'Owler Insight',
    },
    {
      insight_score: 40,
      name: 'Blog Posts',
    },
    {
      insight_score: 15,
      name: 'Press Releases',
    },
    {
      insight_score: 35,
      name: 'Reported News',
    },
  ];
  return { graphData };
};
