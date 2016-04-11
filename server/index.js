import data from './data.json';
const cartItems = [];

function addItemToCart(sku) {
    const existedItem = cartItems.find((item) => item.sku === sku);

    if (existedItem) {
        existedItem.quantity += 1;
    } else {
        cartItems.push({
            sku,
            quantity: 1
        });
    }
}


function getProductData(timeout = 1000) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data.metadata);
        }, timeout);
    });
}

function addProductToCart(sku, timeout = 1000) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (sku) {
                addItemToCart(sku);
                resolve(cartItems);
            } else {
                reject('Error');
            }
        }, timeout);
    });
}

export default {
    getProductData,
    addProductToCart
};
