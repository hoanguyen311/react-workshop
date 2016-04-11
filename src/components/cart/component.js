import React from 'react';
import { blockFactory } from 'rebem';
import Popup from '#popup';
const PopupFactory = React.createFactory(Popup);
const Block = blockFactory('cart');

export default class extends React.Component {
    renderItems() {
        return this.props.items.map((item) => {
            return Block(
                {
                    elem: 'item',
                    tag: 'li',
                    key: item.sku
                },
                `${item.sku} - ${item.quantity}`
            );
        });
    }
    render() {
        const content = this.props.loading ? 'Loading...' : Block({ tag: 'ul' },
            this.renderItems()
        );

        return PopupFactory({}, content);
    }
}
