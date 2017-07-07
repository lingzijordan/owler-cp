/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import cardsReducer from 'containers/common/Cards/reducer';
import companyAcquisitionsReducer from 'containers/common/CompanyAcquisitions/reducer';
import companyCompetetorsReducer from 'containers/common/CompanyCompetetors/reducer';
import companyNewsReducer from 'containers/common/CompanyNews/reducer';
import companyProfileReducer from 'containers/common/CompanyProfile/reducer';
import companyStatsReducer from 'containers/common/CompanyStats/reducer';
import competetiveSetReducer from 'containers/common/CompetetiveSet/reducer';
import employeeHistoryReducer from 'containers/common/EmployeeHistory/reducer';
import fundingHistoryReducer from 'containers/common/FundingHistory/reducer';
import headerReducer from 'containers/common/Header/reducer';
import revenueHistoryReducer from 'containers/common/RevenueHistory/reducer';
import searchFormReducer from 'containers/common/SearchForm/reducer';
import socialStataticsReducer from 'containers/common/SocialStatatics/reducer';
import websiteHistoryReducer from 'containers/common/WebsiteHistory/reducer';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    cards: cardsReducer,
    companyAcquisitions: companyAcquisitionsReducer,
    companyCompetetors: companyCompetetorsReducer,
    companyNews: companyNewsReducer,
    companyProfile: companyProfileReducer,
    companyStats: companyStatsReducer,
    competetiveSet: competetiveSetReducer,
    employeeHistory: employeeHistoryReducer,
    fundingHistory: fundingHistoryReducer,
    header: headerReducer,
    revenueHistory: revenueHistoryReducer,
    searchForm: searchFormReducer,
    socialStatatics: socialStataticsReducer,
    websiteHistory: websiteHistoryReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
