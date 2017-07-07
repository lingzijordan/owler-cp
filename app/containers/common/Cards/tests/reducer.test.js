
import { fromJS } from 'immutable';
import cardsReducer from '../reducer';

describe('cardsReducer', () => {
  it('returns the initial state', () => {
    expect(cardsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
