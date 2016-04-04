import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		this.props.onMount();
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
            )
        }
        return (
            <div block="app">
                {this.props.children}
            </div>
        );
    }
}
