import React, { Component } from "react";
import "./Styling.css";
import style from "./Styling.module.css";

export default class Styling extends Component {
  render() {
    return (
      <div className="text-module">
        <p className="styling">Styling</p>
        <p className={style.textModule}>sagj</p>
      </div>
    );
  }
}
