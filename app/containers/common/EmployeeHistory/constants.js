export const DEFAULT_ACTION = 'app/EmployeeHistory/DEFAULT_ACTION';

export const getEmpGraphData = (fbData) => {
  const graphData = [];
  fbData.revenue_info.forEach((x) => {
    graphData.push({
      dny: x.display_date,
      emp: x.revenue / 1000,
    });
  });
  graphData.sort((a, b) => {
    const dateA = a.dny.split('/')[1];
    const dateB = b.dny.split('/')[1];
    return dateA - dateB;
  });
  return { graphData };
};
