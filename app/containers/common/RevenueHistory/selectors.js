import { createSelector } from 'reselect';

const selectRevenueHistoryDomain = () => (state) => state.get('revenueHistory');

const makeSelectRevenueHistory = () => createSelector(
  selectRevenueHistoryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRevenueHistory;
export {
  selectRevenueHistoryDomain,
};
