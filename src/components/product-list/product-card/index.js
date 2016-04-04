import {connect} from 'react-redux';
import ProductCard from './component';
import {loadSingleProduct} from '~/actions';
function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductCard);
