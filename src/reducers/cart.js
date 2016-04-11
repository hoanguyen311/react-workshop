export default function(state = {}, action) {
    switch (action.type) {
        case 'SHOW_CART_POPUP':
            return {
                ...state,
                loading: false,
                items: action.cartItems
            };
        case 'LOAD_CART_POPUP':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
