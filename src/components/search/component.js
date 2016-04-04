import React from 'react';
import Input from '#input';

export default class Search extends React.Component {
	onChange(e) {
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}

	render() {
		var props = this.props;
		return (
	        <div block="search" mods={{active: true}}>
	            <Input value={this.props.keyword} mix={{block: 'search', elem: 'input'}} type='search' onChange={this.onChange.bind(this)} />
	        </div>
	    );
	}

}
