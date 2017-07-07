
import { fromJS } from 'immutable';
import companyAcquisitionsReducer from '../reducer';

describe('companyAcquisitionsReducer', () => {
  it('returns the initial state', () => {
    expect(companyAcquisitionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
