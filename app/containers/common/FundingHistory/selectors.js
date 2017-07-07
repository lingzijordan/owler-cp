import { createSelector } from 'reselect';

const selectFundingHistoryDomain = () => (state) => state.get('fundingHistory');

const makeSelectFundingHistory = () => createSelector(
  selectFundingHistoryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFundingHistory;
export {
  selectFundingHistoryDomain,
};
