
import { fromJS } from 'immutable';
import companyPortfolioReducer from '../reducer';

describe('companyPortfolioReducer', () => {
  it('returns the initial state', () => {
    expect(companyPortfolioReducer(undefined, {})).toEqual(fromJS({}));
  });
});
