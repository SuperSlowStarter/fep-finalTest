import React, { Component } from "react";

class React_onChange extends Component {
  change = (e) => {
    var val = e.target.value;
    console.log("parm : " + val);
  };

  render() {
    return (
      <div>
        <h2>Change Event</h2>
        <input type="text" onChange={this.change} />
        <select onChange={this.change}>
          <option value="react">react</option>
          <option value="2024">2024</option>
        </select>
      </div>
    );
  }
}

export default React_onChange;
