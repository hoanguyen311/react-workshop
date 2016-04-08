import { connect } from 'react-redux';
import ProductList from './component';

const getFilteredData = (productData, keyword) => {
    if (!productData) {
        return [];
    }

    return productData.filter((item) => {
        return new RegExp(keyword, 'i').test(item.data.name);
    });
};

const mapStateToProps = (state) => {
    return {
        selectedView: state.catalog.selectedView,
        filteredData: getFilteredData(
            state.catalog.productData.results,
            state.catalog.filterKeyword
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
