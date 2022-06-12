import React from 'react';

export default class Timer extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };
    handleStart() {
        this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div style={{margin: 'auto', width: '300px'}}>
                <h1 style={countStyle}>React Timer</h1>
                <h3 style={countStyle}>{this.state.count}</h3>
                <div style={countStyle}>
                {!this.state.isCounting ? (
                    <button style={buttonStyle} onClick={this.handleStart}>Start</button>
                ) : (
                    <button style={buttonStyle} onClick={this.handleStop}>Stop</button>
                )}
                <button style={buttonStyle} onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    textAlign: 'center',
}
const countStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '0.75rem 0.75rem',
}
