
import { fromJS } from 'immutable';
import competetiveSetReducer from '../reducer';

describe('competetiveSetReducer', () => {
  it('returns the initial state', () => {
    expect(competetiveSetReducer(undefined, {})).toEqual(fromJS({}));
  });
});
