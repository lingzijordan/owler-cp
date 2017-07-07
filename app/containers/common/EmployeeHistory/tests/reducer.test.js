
import { fromJS } from 'immutable';
import employeeHistoryReducer from '../reducer';

describe('employeeHistoryReducer', () => {
  it('returns the initial state', () => {
    expect(employeeHistoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
