import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class View extends Component {
    render () {
        return (
            <p>{this.props.inputContent.content2}</p>
        );
    }
}

export default View;