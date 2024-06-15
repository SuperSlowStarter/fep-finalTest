import React, { Component } from "react";

class React_onMouseOver extends Component {
  MouseOver(tag) {
    console.log("TAG : " + tag);
  }

  render() {
    return (
      <div>
        <div onMouseOver={(e) => this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={(e) => this.MouseOver("input")} />
        <select onMouseOver={(e) => this.MouseOver("select")}>
          <option value="react">react</option>
          <option value="2024">2024</option>
        </select>
      </div>
    );
  }
}

export default React_onMouseOver;
