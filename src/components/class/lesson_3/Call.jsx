import React, { Component } from "react";

class Call extends Component {
  state = {
    result: 0,
    a: 12,
    b: 21,
  };

  handleIns = () => {
    this.setState((prev) => ({ result: prev.a + prev.b }));
  };

  handleSeperation = () => {
    this.setState((prev) => ({ result: prev.a - prev.b }));
  };

  handleMulipulation = () => {
    this.setState((prev) => ({ result: prev.a * prev.b }));
  };

  handleDevison = () => {
    this.setState((prev) => ({ result: prev.a / prev.b }));
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <button className="btn btn-outline-success" onClick={this.handleIns}>
          ins
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.handleSeperation}
        >
          sup
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.handleMulipulation}
        >
          mul
        </button>
        <button
          className="btn btn-outline-success"
          onClick={this.handleDevison}
        >
          dev
        </button>
      </>
    );
  }
}

export default Call;
