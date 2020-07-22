import { createStore, combineReducers } from 'redux'
import langReducer from './setLang'


const mainReducer = combineReducers({
    lang: langReducer
})


const store = createStore(mainReducer)

export default store