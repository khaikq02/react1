import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleEvent = (name) => {
    alert(`Hello ${name}`);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleEvent("Wiliam")}>Click</button>
      </div>
    );
  }
}
