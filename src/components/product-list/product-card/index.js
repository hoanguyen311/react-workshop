import { connect } from 'react-redux';
import ProductCard from './component';
import { addToCart } from '~/actions';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        buyNowClickHandler(sku) {
            dispatch(
                addToCart(sku)
            );
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCard);
