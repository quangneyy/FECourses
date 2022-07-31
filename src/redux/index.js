import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducer/UserReducer'
import Loading from './reducer/Loading'

const rootReducer = combineReducers({UserReducer, Loading})
export const store = createStore(rootReducer, (applyMiddleware(thunk)))