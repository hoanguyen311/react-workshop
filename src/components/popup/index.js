import { connect } from 'react-redux';
import Popup from './component';
import { toggleCartPopup } from '~/actions';

const mapStateToProps = (state, ownProps) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        closeClickHandler() {
            dispatch(
                toggleCartPopup(false)
            );
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);
