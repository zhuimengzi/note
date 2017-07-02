import React, {Component} from 'react';
import {render} from 'react-dom';
import {observable, computed, action} from 'mobx';
import Input from './src/Input';
import View from './src/View.js';

class InputContent {
    @observable content;

    @action changeConent (content) {
        this.content = content;
    }

    @computed get content2 () {
        return this.content ? this.content + ' se!' : '';
    }
}

class App extends Component {
    render () {
        return (
            <div>
                <Input inputContent={this.props.inputContent} />
                <View inputContent={this.props.inputContent} />
            </div>
        );
    }
}

var inputContent = new InputContent();

render(
    <App inputContent={inputContent} />,
    document.querySelector('#app')
);