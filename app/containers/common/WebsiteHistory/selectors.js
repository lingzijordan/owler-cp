import { createSelector } from 'reselect';

const selectWebsiteHistoryDomain = () => (state) => state.get('websiteHistory');

const makeSelectWebsiteHistory = () => createSelector(
  selectWebsiteHistoryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWebsiteHistory;
export {
  selectWebsiteHistoryDomain,
};
