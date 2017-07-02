import React, {Component} from 'react';
import ListItem from  './ListItem.js';

export default class List extends Component {
    constructor () {
        super();
    }

    render () {
        var lis = [];
        for (var i = 0; i < 5; i++) {
            lis.push(
                <li key={i}>
                    {
                        i === 4 ? 
                        <ListItem /> :
                        <ListItem index={i} />
                    }
                </li>
            );
        }
        return (
            <ul>
                {lis}
            </ul>
        );
    }
}