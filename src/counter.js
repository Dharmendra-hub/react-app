import React from "react";

export default class Counter extends React.Component {
    //Mounting
    //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    constructor(props) {
        console.log('Constructor 1');
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);

        //setState can only be used in Class based component
        //this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });

    }




    increment() {
        this.setState({ counter: this.state.counter + 1 });
        console.log('binded function way');
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    //Called right after render()
    componentDidMount() {
        console.log('Component did mount : will run only once');
        console.log('----------------------------------------');

        console.log('===>', this.props.getFromChild("hello from child"));
    }

    render() {
        console.log('Render 2');
        return (
            <div>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
                <button onClick={this.handleClick}>{'click me'}</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('Component Did Update');
        console.log(prevProps);
        console.log(prevState);
        console.log(snapShot);
    }

}