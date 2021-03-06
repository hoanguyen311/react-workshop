export default function(state = {}, action) {
    switch (action.type) {
        case 'TOGGLE_APP_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'TOGGLE_CART_POPUP':
            return {
                ...state,
                showCartPopup: action.showCartPopup
            };
        default:
            return state;
    }
}
