import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducer/UserReducer'
import Loading from './reducer/Loading'
import ListUser from './reducer/ListUser'

const rootReducer = combineReducers({UserReducer, Loading, ListUser})
export const store = createStore(rootReducer, (applyMiddleware(thunk)))
