import { createStore, combineReducers } from 'redux';
import langReducer from './setLang';
import ratingMoviesReducer from './rating';
import listedMoviesReducer from './listing';
import alertReducer from './alert';

const mainReducer = combineReducers({
	lang: langReducer,
	rating: ratingMoviesReducer,
	listing: listedMoviesReducer,
	alerts: alertReducer
});

const store = createStore(mainReducer);

export default store;
