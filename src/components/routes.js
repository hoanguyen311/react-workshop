import {Route, IndexRoute} from 'react-router';
import App from '#app';
import ProductList from '#product-list';
import ProductDetails from '#product-details';
import React from 'react';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={ProductList} />
		<Route path='/p/:sku' component={ProductDetails} />
	</Route>
);
