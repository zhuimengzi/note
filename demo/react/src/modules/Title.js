import React, {Component} from 'react';

class Title extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>Title Component {this.props.index}</div>
        );
    }
}

export default Title;