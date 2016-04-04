import React from 'react';
import App from '#app';
import '~/assets/styles.css';
import { render } from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '~/reducers';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, browserHistory} from 'react-router';
import routes from '~/components/routes';

const devToolsMiddleware = window.devToolsExtension && window.devToolsExtension();


var finalCreateStore = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);


const store = finalCreateStore(reducer ,{
	catalog: {
		views: ['grid', 'list'],
		selectedView: 'grid',
		filterKeyword: '',
		productData: []
	},
	app: {
		isLoading: false
	}
});

const history = syncHistoryWithStore(browserHistory, store);
render(
	(
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	),
	document.getElementById('app')
);
