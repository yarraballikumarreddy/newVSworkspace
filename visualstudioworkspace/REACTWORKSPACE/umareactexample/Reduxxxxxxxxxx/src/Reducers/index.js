import {combineReducers} from 'redux';
 import postReducer from '../Reducers/postReducer';
 export default combineReducers({
     posts:postReducer
 })