import { createSelector } from 'reselect';

const selectCompanyProfileDomain = () => (state) => state.get('companyProfile');

const makeSelectCompanyProfile = () => createSelector(
  selectCompanyProfileDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyProfile;
export {
  selectCompanyProfileDomain,
};
