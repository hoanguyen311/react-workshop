import React from 'react';
import Rating from '#rating';
import {Link} from 'react-router';

export default class ProductCard extends React.Component {
    render() {
		let {selectedView, data, images} = this.props;
        let {name, url, price, max_price, max_saving_percentage, ratings_total, sku} = data;
		let image = images[0].path;
        return (
            <div block="product-card" mods={{view: selectedView}}>
                <Link className="product-card__anchor"
					to={`/p/${sku}`}
				>
                    <div block="product-card" elem="image-container">
                        <img alt={name}
							 block="product-card" elem="image"
							src={image} />
                    </div>
                    <div block="product-card" elem="description">
                        <div block="product-card" elem="name-wrap">
                            <span block="product-card" elem="name">{name}</span>
                        </div>
                        <div block="product-card" elem="product-info">
                            <div block="product-card" elem="price">{price}</div>
                            <div block="product-card" elem="sale">{`- ${max_saving_percentage}%`}</div>
                            <div block="product-card" elem="old-price-container">
                                <div block="product-card" elem="old-price">{max_price}</div>
                            </div>
                            <div block="product-card" elem="rating">
                                <Rating ratingNum={ratings_total}/>
                            </div>
                            <div block="product-card" elem="button-buy">
                                <div className="button-buy__text" block="product-card" elem="button-buy-text">BUY NOW</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
