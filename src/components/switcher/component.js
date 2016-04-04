import React from 'react';
import Item from './item';

export default class Switcher extends React.Component {
    handleClick(view) {
        if (this.props.handleClick) {
            this.props.handleClick(view);
        }
    }
    renderItems() {
        var currentView = this.props.selectedView;
        return this.props.views.map((view) => {
            return (
                <Item
                    key = {view}
                    handleClick = {this.handleClick.bind(this)}
                    view = {view}
                    active = {currentView === view}
                />
            )
        });
    }
    render() {
        return (
            <div block="switcher">
                <span block="switcher" elem="label">View</span>
                <div block="switcher" elem="list">
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}
