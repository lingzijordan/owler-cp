import { createSelector } from 'reselect';

const selectCompanyNewsDomain = () => (state) => state.get('companyNews');

const makeSelectCompanyNews = () => createSelector(
  selectCompanyNewsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyNews;
export {
  selectCompanyNewsDomain,
};
