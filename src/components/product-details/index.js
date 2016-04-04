import {connect} from 'react-redux';
import ProductDetails from './component';
import {loadSingleProduct} from '~/actions';


function getSingleProduct(products, sku) {
	let product =  products.find((product) => {
		return product.data.sku === sku;
	});

	return {
		...product.data,
		images: product.images
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		data: getSingleProduct(state.catalog.productData.results,ownProps.params.sku)
	}
};
const mapDispatchToProps = (dispatch) => {
	return {}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductDetails);
