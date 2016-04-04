import {connect} from 'react-redux';
import Search from './component';
import {changeFilterKeyword} from '~/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onChange(keyword) {
			dispatch(
				changeFilterKeyword(keyword)
			);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		keyword: state.catalog.filterKeyword
	};
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
