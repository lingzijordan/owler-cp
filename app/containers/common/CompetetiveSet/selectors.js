import { createSelector } from 'reselect';

const selectCompetetiveSetDomain = () => (state) => state.get('competetiveSet');

const makeSelectCompetetiveSet = () => createSelector(
  selectCompetetiveSetDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompetetiveSet;
export {
  selectCompetetiveSetDomain,
};
