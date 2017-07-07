import { createSelector } from 'reselect';

const selectSocialStataticsDomain = () => (state) => state.get('socialStatatics');

const makeSelectSocialStatatics = () => createSelector(
  selectSocialStataticsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSocialStatatics;
export {
  selectSocialStataticsDomain,
};
