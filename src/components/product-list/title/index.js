import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div block="title">
                <h1 block="title" elem="heading">Computers &amp; Laptopssss</h1>
                <span block="title" elem="sub-heading">{this.props.productCount} results</span>
            </div>
        );
    }
}
