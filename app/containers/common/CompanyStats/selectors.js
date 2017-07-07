import { createSelector } from 'reselect';

const selectCompanyStatsDomain = () => (state) => state.get('companyStats');

const makeSelectCompanyStats = () => createSelector(
  selectCompanyStatsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyStats;
export {
  selectCompanyStatsDomain,
};
