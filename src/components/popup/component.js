import React from 'react';
import { blockFactory } from 'rebem';

const Block = blockFactory('popup');

export default class extends React.Component {
    render() {
        return Block(null,
            Block({ elem: 'content' },
                this.props.children,
                Block({
                    elem: 'close',
                    onClick: this.props.closeClickHandler.bind(this)
                })
            ),
            Block({ elem: 'overlay' })
        );
    }
}
