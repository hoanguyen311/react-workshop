import React from 'react';

export default class Switcher extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
		e.preventDefault();
        if (this.props.handleClick) {
            this.props.handleClick(this.props.view)
        }
    }
    render() {
        return (
            <a block="switcher"
				elem="item"
				mods={{active: this.props.active}}
				onClick={this.handleClick.bind(this)}>
                <i block="switcher" elem="icon" mods={{view: this.props.view}} className="icon-svg"></i>
            </a>
        );
    }
}
