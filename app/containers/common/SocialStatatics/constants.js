export const DEFAULT_ACTION = 'app/SocialStatatics/DEFAULT_ACTION';

export const getSocialGraphData = () => {
  // const graphData = [];
  // No logic for now as there isn't more clarity about the sources.
  const graphData = [
    {
      insight_score: 1000,
      mny: '05/2014',
    },
    {
      insight_score: 1200,
      mny: '10/2014',
    },
    {
      insight_score: 1500,
      mny: '05/2015',
    },
    {
      insight_score: 2000,
      mny: '10/2015',
    },
    {
      insight_score: 2200,
      mny: '05/2016',
    },
    {
      insight_score: 2500,
      mny: '10/2016',
    },
    {
      insight_score: 3000,
      mny: '05/2017',
    },
  ];
  return { graphData };
};
