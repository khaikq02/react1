import React, { Component } from "react";

export default class DataBinding extends Component {
  renderCpt = () => {
    const myInfo = {
      name: "Wiliam Kieu",
      age: 21,
      job: "FE dev",
    };

    return (
      <div>
        <h3>{myInfo.name}</h3>
        <p>{myInfo.age}</p>
        <p>{myInfo.job}</p>
      </div>
    );
  };

  render() {
    return <div>{/* <button onClick={hand}></button> */}</div>;
  }
}
