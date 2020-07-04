import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback function: " + this.state.count);
      }
    );
    console.log("After the Function: " + this.state.count);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
