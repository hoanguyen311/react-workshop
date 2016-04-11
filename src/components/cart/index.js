import { connect } from 'react-redux';
import Cart from './component';


const mapStateToProps = (state) => {
    return {
        ...state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
