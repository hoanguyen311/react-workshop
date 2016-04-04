export default function(state = {}, action) {
	switch (action.type) {
		case 'APP_LOADING':
			return {
				...state,
				isLoading: true
			};
		case 'APP_STOP_LOADING':
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
}
