import React from 'react'
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import langReducer from './setLang';
import ratingMoviesReducer from './rating';
import listedMoviesReducer from './listing';
import alertReducer from './alert';
import storage from 'redux-persist/lib/storage';

const mainReducer = combineReducers({
	lang: langReducer,
	rating: ratingMoviesReducer,
	listing: listedMoviesReducer,
	alerts: alertReducer
});

const persistConfig = {
    key: 'MovieMe',
	storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = createStore(persistedReducer);

const persistor = persistStore(store)

export {store, persistor};
