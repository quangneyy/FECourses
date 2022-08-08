import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducer/UserReducer'
import Loading from './reducer/Loading'
import ListUser from './reducer/ListUser'
import CoursesReducer from './reducer/CoursesReducer'

const rootReducer = combineReducers({UserReducer, Loading, ListUser, CoursesReducer})
export const store = createStore(rootReducer, (applyMiddleware(thunk)))
