
import { fromJS } from 'immutable';
import revenueHistoryReducer from '../reducer';

describe('revenueHistoryReducer', () => {
  it('returns the initial state', () => {
    expect(revenueHistoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
