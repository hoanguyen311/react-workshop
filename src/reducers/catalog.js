export default function (catalog = {}, action) {
	switch (action.type) {
		case 'VIEW_SELECT':
			return {
				...catalog,
				selectedView: action.selectedView
			};
		case 'PRODUCT_DATA_AVAILABLE':
			return {
				...catalog,
				productData: action.productData
			};
		case 'FILTER_KEYWORD_UPDATE':
			return {
				...catalog,
				filterKeyword: action.keyword
			};
		default:
			return catalog;
	}
}
