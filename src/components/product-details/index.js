import { connect } from 'react-redux';
import ProductDetails from './component';

function getSingleProduct(products, sku) {
    const foundProduct = products.find((product) => {
        return product.data.sku === sku;
    });

    return {
        ...foundProduct.data,
        images: foundProduct.images
    };
}

const mapStateToProps = (state, ownProps) => ({
    data: getSingleProduct(state.catalog.productData.results, ownProps.params.sku)
});

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails);
