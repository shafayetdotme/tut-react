import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Hello World" };
  }

  //   state = { message: "Hello World" };
  changeMessage() {
    this.setState({ message: "Thanks for the subscription." });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
