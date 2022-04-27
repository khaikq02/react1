import React, { Component } from "react";

export default class State extends Component {
  state = {
    isLogIn: false,
  };

  userInfo = {
    name: "Wiliam",
    age: 21,
  };

  logIn = () => {
    const newState = {
      isLogIn: true,
    };

    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  logInCpt = () => {
    if (this.state.isLogIn) {
      return (
        <div>
          <h3>{this.userInfo.name}</h3>
          <p>{this.userInfo.age}</p>
        </div>
      );
    } else {
      return <button onClick={this.logIn}>Login</button>;
    }
  };
  render() {
    return <div>{this.logInCpt()}</div>;
  }
}
