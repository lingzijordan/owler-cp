import { createSelector } from 'reselect';

const selectEmployeeHistoryDomain = () => (state) => state.get('employeeHistory');

const makeSelectEmployeeHistory = () => createSelector(
  selectEmployeeHistoryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEmployeeHistory;
export {
  selectEmployeeHistoryDomain,
};
