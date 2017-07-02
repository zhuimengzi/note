import React, {Component} from 'react';
import Title from  './Title.js';
import Content from './Content.js';

export default class ListItem  extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Title index={this.props.index} />
                <Content />
            </div>
        );
    }
}