import { createSelector } from 'reselect';

const selectSearchFormDomain = () => (state) => state.get('searchForm');

const makeSelectSearchForm = () => createSelector(
  selectSearchFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSearchForm;
export {
  selectSearchFormDomain,
};
