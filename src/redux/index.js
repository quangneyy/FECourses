import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducer/UserReducer'
import Loading from './reducer/Loading'
import ListUser from './reducer/ListUser'
import CoursesReducer from './reducer/CoursesReducer'
import ResetPass from './reducer/ResetPass'
import LessonsReducer from './reducer/LessonsReducer'
import CategoryReducer from './reducer/CategoryReducer'
import CommentReducer from './action/CommentReducer'
const rootReducer = combineReducers({UserReducer, Loading, ListUser, CoursesReducer, ResetPass, LessonsReducer, CategoryReducer, CommentReducer})
export const store = createStore(rootReducer, (applyMiddleware(thunk)))
