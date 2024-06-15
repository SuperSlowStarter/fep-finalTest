import React, { Component } from "react";

class React_onClick extends Component {
  buttonClick = (param) => {
    if (typeof param !== "string") param = "Click a";
    console.log("param : " + param);
  };

  render() {
    return (
      <>
        <h2> Click 이벤트 </h2>
        <button onClick={() => this.buttonClick("Click Button")}>
          Button clicked
        </button>
        <div onClick={() => this.buttonClick("Click div")}> DIV clicked </div>
        <a
          href="http://www.naver.com"
          onClick={(e) => {
            e.preventDefault();
            this.buttonClick("Click a");
          }}
        >
          A clicked
        </a>
      </>
    );
  }
}

export default React_onClick;
