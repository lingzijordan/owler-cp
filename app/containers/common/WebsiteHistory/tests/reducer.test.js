
import { fromJS } from 'immutable';
import websiteHistoryReducer from '../reducer';

describe('websiteHistoryReducer', () => {
  it('returns the initial state', () => {
    expect(websiteHistoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
