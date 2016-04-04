import React from 'react';
import Rating from '#rating';
import Thumbnails from '#thumbnails';
import {Link} from 'react-router';
import request from 'superagent';
import jsonp from 'superagent-jsonp';
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		if (!this.props.data) {
			return <div>...Loading</div>;
		}
		let {
			ratings_total,
			name,
			max_saving_percentage,
			description,
			images
		} = this.props.data;
        return (
			<div block="product-details">
				<Link className="product-details__back-link"
					to="/">👈 Back to products list</Link>
				<div block="product-details"
					elem="wrap">
					<h3 block="product-details" elem="name"> {name} </h3>
					<div block="product-details" elem="images">
						<Thumbnails images={images}/>
					</div>
					<Rating ratingNum={ratings_total} />
					<p block="product-details" elem="description">{description}</p>
				</div>
			</div>
		);
    }
}
