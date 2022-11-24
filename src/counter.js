import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        console.log('Render');
        return (
            <div>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }
}