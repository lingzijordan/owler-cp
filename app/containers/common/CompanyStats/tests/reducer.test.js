
import { fromJS } from 'immutable';
import companyStatsReducer from '../reducer';

describe('companyStatsReducer', () => {
  it('returns the initial state', () => {
    expect(companyStatsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
