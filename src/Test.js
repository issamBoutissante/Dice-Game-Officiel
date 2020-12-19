import React, { Component } from "react";

export default class Test extends Component {
  state = {
    score: 0,
  };
  onIncrementHandler() {
    let time = 0;
    for (let i = 0; i < 10; i++) {
      time += 100;
      setTimeout(() => {
        this.setState((prev) => {
          return {
            score: prev.score + 1,
          };
        });
      }, time);
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "30px", marginRight: "30px" }}>
          {this.state.score}
        </label>
        <button onClick={this.onIncrementHandler.bind(this)}>Increment</button>
      </div>
    );
  }
}
