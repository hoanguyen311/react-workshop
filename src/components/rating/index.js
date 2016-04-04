import React from 'react';

export default class Rating extends React.Component {
    render() {

		const {ratingNum} = this.props;
		const avr = ratingNum ? ratingNum.avr : 0;

        return (
			<div block="rating">
				<div
				 	block="rating"
					elem="stars"
					title="3.9182">
					<div block="rating"
						elem="stars-bar">
						<span block="rating" elem="star" mods={{color: 'grey'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'grey'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'grey'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'grey'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'grey'}} className="icon-svg"></span>
					</div>
					<div
					 	block="rating"
						elem="stars-bar"
						mods={{active: true}}
						style={{width:`${avr*100/5}%`}}>
						<span block="rating" elem="star" mods={{color: 'orange'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'orange'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'orange'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'orange'}} className="icon-svg"></span>
						<span block="rating" elem="star" mods={{color: 'orange'}} className="icon-svg"></span>
					</div>
				</div>
				<span block="rating" elem="number">(159 reviews)</span>
			</div>

        );
    }
}
