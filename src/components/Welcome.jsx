import React, { Component } from "react";

// class Component
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Class: {this.props.name} as {this.props.shortName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
