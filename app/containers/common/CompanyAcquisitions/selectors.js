import { createSelector } from 'reselect';

const selectCompanyAcquisitionsDomain = () => (state) => state.get('companyAcquisitions');

const makeSelectCompanyAcquisitions = () => createSelector(
  selectCompanyAcquisitionsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyAcquisitions;
export {
  selectCompanyAcquisitionsDomain,
};
