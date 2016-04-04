import { combineReducers } from 'redux';
import catalog from './catalog';
import app from './app';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
	catalog,
	app,
	routing: routerReducer
});
