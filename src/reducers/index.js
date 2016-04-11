import { combineReducers } from 'redux';
import catalog from './catalog';
import app from './app';
import cart from './cart';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
    catalog,
    app,
    cart,
    routing: routerReducer
});
