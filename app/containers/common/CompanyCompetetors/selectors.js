import { createSelector } from 'reselect';

const selectCompanyCompetetorsDomain = () => (state) => state.get('companyCompetetors');

const makeSelectCompanyCompetetors = () => createSelector(
  selectCompanyCompetetorsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyCompetetors;
export {
  selectCompanyCompetetorsDomain,
};
