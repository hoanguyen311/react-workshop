import Server from '~/../server';

export function selectView(view) {
	return {
		type: 'VIEW_SELECT',
		selectedView: view
	};
}
export function appLoading() {
	return {
		type: 'APP_LOADING'
	}
}
export function appStopLoading() {
	return {
		type: 'APP_STOP_LOADING'
	}
}
export function updateProductData(data) {
	return {
		type: 'PRODUCT_DATA_AVAILABLE',
		productData: data
	};
}
export function getProductData() {
	return function(dispatch) {
		dispatch(appLoading());
		return Server(1000).then((data) => {
			dispatch(updateProductData(data));
			dispatch(appStopLoading());
		});
	};
}

export function changeFilterKeyword(keyword) {
	return {
		type: 'FILTER_KEYWORD_UPDATE',
		keyword: keyword
	};
}
export function loadSingleProduct(product) {
	return {
		type: 'LOAD_SINGLE_PRODUCT',
		data: product
	};
}
export function backToProductList() {
	return {
		type: 'BACK_TO_PRODUCT_LIST'
	};
}
