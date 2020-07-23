import { createStore, combineReducers } from 'redux'
import langReducer from './setLang'
import ratingMoviesReducer from  './rating'
import listedMoviesReducer from  './listing'

const mainReducer = combineReducers({
    lang: langReducer,
    rating: ratingMoviesReducer,
    listing: listedMoviesReducer
})


const store = createStore(mainReducer)

export default store