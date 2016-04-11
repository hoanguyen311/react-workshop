import React from 'react';
import { BEM } from 'rebem';
import Cart from '#cart';

export default class extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }
    renderCartPopup() {
        return <Cart />;
    }
    render() {
        if (this.props.isLoading) {
            return (
                <div block="app"
                    mods={{
                        ['is-loading']: true
                    }}
                    >
                    ...Loading
                </div>
            );
        }

        return BEM(
            { block: 'app' },
            this.props.children,
            this.props.showCartPopup && this.renderCartPopup()
        );
    }
}
