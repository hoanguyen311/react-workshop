import React from 'react';

export default class Thumbnails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedImageIndex: 0
		};
	}
	static defaultProps = {
		images: []
	};
	renderSelectedItem() {
		var image = this.props.images[this.state.selectedImageIndex];
		if (image) {
			return (
				<img block="thumbnails" elem="main-image" src={image.path} />
			);
		}
		return false;
	}
	renderThumbItems() {
		return this.props.images.map((image, index) => {
			return <img
				block="thumbnails"
				elem="item"
				width={30}
				height={30}
				src={image.path}
				onMouseOver={() => {
					this.changeItem(index);
				}}
				key={index}/>
		});
	}
	changeItem(index) {
		this.setState({
			selectedImageIndex: index
		});
	}
    render() {
        return (
			<div block="thumbnails">
				<div block="thumbnails" elem="list">
					{this.renderThumbItems()}
				</div>
				{this.renderSelectedItem()}
			</div>
        );
    }
}
