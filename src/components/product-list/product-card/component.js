import React from 'react';
import Rating from '#rating';
import { Link } from 'react-router';
import { blockFactory } from 'rebem';
import { stringify } from 'rebem-classname';

const Block = blockFactory('product-card');
const LinkFactory = React.createFactory(Link);

export default class ProductCard extends React.Component {
    renderProductInfo() {
        const {
            price,
            max_price,
            max_saving_percentage,
            ratings_total
        } = this.props.data;

        return Block({ elem: 'product-info' },
            Block({ elem: 'price' }, price),
            Block({ elem: 'sale' }, `- ${max_saving_percentage}%`),
            Block({ elem: 'old-price-container' },
                Block({ elem: 'old-price' }, max_price)
            ),
            Block({ elem: 'rating' },
                Rating({ ratingNum: ratings_total })
            ),
            Block(
                {
                    elem: 'button-buy',
                    onClick: this.buyNowClickHandler.bind(this)
                },
                Block({ elem: 'button-buy-text' }, 'BUY NOW')
            )
        );
    }
    buyNowClickHandler(e) {
        const { sku } = this.props.data;

        e.stopPropagation();
        e.preventDefault();
        if (this.props.buyNowClickHandler) {
            this.props.buyNowClickHandler(sku);
        }
    }
    renderImage() {
        const image = this.props.images[0].path;

        return Block(
            { elem: 'image-container' },
            Block(
                { tag: 'img', elem: 'image', src: image, alt: image }
            )
        );
    }
    renderLink(children) {
        const { sku } = this.props.data;
        const className = stringify({
            block: 'product-card',
            elem: 'anchor'
        });

        return LinkFactory({
            className,
            to: `/p/${sku}`
        }, ...children);
    }
    renderName() {
        const { name } = this.props.data;

        return Block(
            { elem: 'name-wrap' },
            Block({ elem: 'name' }, name)
        );
    }
    render() {
        const { selectedView } = this.props;

        return Block(
            { mods: { view: selectedView } },
            this.renderLink([
                this.renderImage(),
                Block(
                    { elem: 'description' },
                    this.renderName(),
                    this.renderProductInfo()
                )
            ])
        );
    }
}
