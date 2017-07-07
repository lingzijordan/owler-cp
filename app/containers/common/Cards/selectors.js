import { createSelector } from 'reselect';

const selectCardsDomain = () => (state) => state.get('cards');

const makeSelectCards = () => createSelector(
  selectCardsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCards;
export {
  selectCardsDomain,
};
