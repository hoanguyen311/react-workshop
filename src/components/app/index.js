import { connect } from 'react-redux';
import App from './component';
import { getProductData } from '~/actions';

const mapStateToProps = (state) => {
    return {
        ...state.app
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMount() {
            dispatch(
                getProductData()
            );
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
