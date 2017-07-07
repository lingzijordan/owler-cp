export const DEFAULT_ACTION = 'app/FundingHistory/DEFAULT_ACTION';

export const getFundingGraphData = (fbData) => {
  const graphData = [];
  fbData.funding.forEach((x) => {
    const xDate = new Date(x.date.$date);
    graphData.push({
      amount: x.amount,
      dny: `${xDate.getMonth() + 1}/${xDate.getFullYear()}`,
      year: xDate.getFullYear(),
    });
  });
  graphData.sort((a, b) => {
    const dateA = a.year;
    const dateB = b.year;
    return dateA - dateB;
  });
  return { graphData };
};
