import { createSelector } from 'reselect';

const selectCompanyPortfolioDomain = () => (state) => state.get('companyPortfolio');

const makeSelectCompanyPortfolio = () => createSelector(
  selectCompanyPortfolioDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyPortfolio;
export {
  selectCompanyPortfolioDomain,
};
