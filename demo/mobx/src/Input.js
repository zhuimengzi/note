import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class Input extends Component {

    handleInputChange (e) {
        this.props.inputContent.changeConent(e.target.value);
    }

    render () {
        return (
            <input 
                type="text" 
                onChange={this.handleInputChange.bind(this)}
            />
        );
    }
}

export default Input;