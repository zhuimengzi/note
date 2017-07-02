import React, {Component} from 'react';

class Input extends Component {
    constructor () {
        super();

        this.state = {
            num: null
        };
    }

    inputChange (e) {
        var num = e.target.value && parseFloat(e.target.value);
        this.props.getNum(num);
        this.setState({
            num
        });
    }

    render () {
        return (
            <div>
                <input type="number" value={this.state.num} onChange={this.inputChange.bind(this)} />
            </div>
        );
    }
}

export default Input;