import Server from '~/../server';

export function selectView(view) {
    return {
        type: 'VIEW_SELECT',
        selectedView: view
    };
}
export function toggleAppLoading(isLoading) {
    return {
        type: 'TOGGLE_APP_LOADING',
        isLoading
    };
}
export function updateProductData(data) {
    return {
        type: 'PRODUCT_DATA_AVAILABLE',
        productData: data
    };
}
export function getProductData() {
    return function(dispatch) {
        dispatch(toggleAppLoading(true));

        return Server.getProductData(1000).then((data) => {
            dispatch(updateProductData(data));
            dispatch(toggleAppLoading(false));
        });
    };
}

export function changeFilterKeyword(keyword) {
    return {
        type: 'FILTER_KEYWORD_UPDATE',
        keyword
    };
}
export function loadSingleProduct(product) {
    return {
        type: 'LOAD_SINGLE_PRODUCT',
        data: product
    };
}
export function backToProductList() {
    return {
        type: 'BACK_TO_PRODUCT_LIST'
    };
}
export function addToCart(sku) {
    return function(dispatch) {
        dispatch(toggleCartPopup(true));
        dispatch(loadCartPopup());

        return Server.addProductToCart(sku, 2000).then((cartItems) => {
            dispatch(showCart(cartItems));
        });
    };
}
export function loadCartPopup() {
    return {
        type: 'LOAD_CART_POPUP'
    };
}
export function showCart(cartItems) {
    return {
        cartItems,
        type: 'SHOW_CART_POPUP'
    };
}

export function toggleCartPopup(showCartPopup) {
    return {
        type: 'TOGGLE_CART_POPUP',
        showCartPopup
    };
}
