import {connect} from 'react-redux';
import App from './component';
import {getProductData} from '~/actions';

const mapStateToProps = (state) => {
	return {
		productData: state.catalog.productData,
		isLoading: state.app.isLoading
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onMount() {
			dispatch(
				getProductData()
			);
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
