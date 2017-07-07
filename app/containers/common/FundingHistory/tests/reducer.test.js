
import { fromJS } from 'immutable';
import fundingHistoryReducer from '../reducer';

describe('fundingHistoryReducer', () => {
  it('returns the initial state', () => {
    expect(fundingHistoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
