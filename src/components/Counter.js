import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };
  decrement = () => {
    let counter = this.state.counter;
    this.setState({ counter: counter - 1 });
  };
  render() {
    return (
      <div className="counter-box">
        <button onClick={this.increment}>+1</button>
        <span className={this.state.counter < 0 ? "counter-box__danger" : null}>
          {this.state.counter}
        </span>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}
