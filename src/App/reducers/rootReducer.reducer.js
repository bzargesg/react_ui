import employee from './employees.reducer';
import login from './login.reducer.js'
import {combineReducers} from 'redux';
const rootReducer = combineReducers({employee, login});
export default rootReducer;
