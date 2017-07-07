
import { fromJS } from 'immutable';
import companyNewsReducer from '../reducer';

describe('companyNewsReducer', () => {
  it('returns the initial state', () => {
    expect(companyNewsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
