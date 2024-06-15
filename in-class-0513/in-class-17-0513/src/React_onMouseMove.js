import React, { Component } from "react";

class React_onMouseMove extends Component {
  MouseMove(tag) {
    console.log("TAG : " + tag);
  }

  render() {
    return (
      <div>
        <div onMouseMove={(e) => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={(e) => this.MouseMove("input")} />
        <select onMouseMove={(e) => this.MouseMove("select")}>
          <option value="react">react</option>
          <option value="2024">2024</option>
        </select>
      </div>
    );
  }
}

export default React_onMouseMove;
