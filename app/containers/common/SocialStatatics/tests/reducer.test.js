
import { fromJS } from 'immutable';
import socialStataticsReducer from '../reducer';

describe('socialStataticsReducer', () => {
  it('returns the initial state', () => {
    expect(socialStataticsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
