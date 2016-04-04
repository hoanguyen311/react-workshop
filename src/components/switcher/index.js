import {connect} from 'react-redux';
import Switcher from './component';
import {selectView} from '~/actions';

function mapStateToProps(state) {
	return {
		views: state.catalog.views,
		selectedView: state.catalog.selectedView
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick(view) {
			dispatch(selectView(view));
		}
	};
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Switcher);
