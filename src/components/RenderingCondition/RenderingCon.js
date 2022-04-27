import React, { Component } from "react";

export default class RenderingCon extends Component {
  seen = true;
  userName = "Wiliam";
  render() {
    return <div>{this.seen ? <p>{this.userName}</p> : <p>LogIn</p>}</div>;
  }
}
