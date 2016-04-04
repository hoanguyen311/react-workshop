import React from 'react';
import Switcher from '#switcher';
import Item from '#product-list/product-card';
import Title from '#product-list/title';
import Search from '#search';

export default class ProductList extends React.Component {
	renderItems() {
		if (!this.props.filteredData.length) {
			return <p block="product-list" elem="empty-msg">
				{'No result found ! 😿, please try with another keyword'}
			</p>
		}
		return this.props.filteredData.map((itemData) => {
			return (
				<div block="product-list" elem="item" key={itemData.id}>
					<Item {...itemData} selectedView={this.props.selectedView} />
				</div>
			)
		});
	}
    render() {
        return (
            <div block="product-list">
				<div block="product-list" elem="search">
					<Search />
				</div>
                <header block="product-list" elem="header">
                    <div block="product-list" elem="title">
                        <Title productCount={this.props.filteredData.length}/>
                    </div>
                    <div block="product-list" elem="filter">
                        <Switcher />
                    </div>
                </header>
                <div
                    block="product-list"
                    elem="list"
                    mods={{view: this.props.selectedView}}>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}
