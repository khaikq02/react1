import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";
export default class Home extends Component {
  render() {
    let style = {
      margin: 0,
      padding: 0,
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div style={style} className="col-12">
            <Header />
          </div>
        </div>

        <div className="row text-white">
          <div style={style} className="col-12">
            <Body />
          </div>
        </div>
      </div>
    );
  }
}
