import React from "react";

class KeyEventsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyPressed: "",
      keyCode: null,
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyUp(event) {
    this.setState({
      keyPressed: event.key,
    });

    console.log("KeyUp - Pressed Key: ", event.key);
  }

  handleKeyPress(event) {
    this.setState({
      keyCode: event.keyCode,
    });

    console.log("KeyUp - Pressed Key: ", event.keyCode);
  }

  handleKeyDown(event) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
    }
  }

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("keypress", this.handleKeyPress);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("keypress", this.handleKeyPress);
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <h1>React Key Event Example</h1>
        <p>KeyUp - Pressed Key: {this.state.keyPressed}</p>
        <p>KeyPress - Pressed Key Code: {this.state.keyCode}</p>
        <input
          type="text"
          onKeyDown={this.handleKeyDown}
          placeholder="Give me the Key Here"
        />
      </div>
    );
  }
}

export default KeyEventsExample;
