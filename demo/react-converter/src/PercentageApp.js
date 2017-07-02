import React, {Component} from 'react';
import Input from './Input.js';
import PercentageShower from './PercentageShower.js';

class PercentageApp extends Component {
    constructor () {
        super();

        this.state = {
            num: null
        };
    }

    getNum (num) {
        this.setState({
            num: (num * 100).toFixed(2) + '%'
        });
    }

    render () {
        return (
            <section>
                <Input getNum={this.getNum.bind(this)} />
                <PercentageShower num={this.state.num} />
            </section>
        );
    }
}

export default PercentageApp;