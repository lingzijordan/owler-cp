
import { fromJS } from 'immutable';
import companyCompetetorsReducer from '../reducer';

describe('companyCompetetorsReducer', () => {
  it('returns the initial state', () => {
    expect(companyCompetetorsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
