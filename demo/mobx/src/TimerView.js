import React, {Component} from 'react';
import {observer} from "mobx-react";

@observer
class TimerView extends React.Component {
    render() {
        return (
            <button>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }
};

export default TimerView;