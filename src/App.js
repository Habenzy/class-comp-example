import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Submit the Form to see this text change",
      input: "",
    };
  }

  handleInput = (evt) => {
    this.setState({ input: evt.target.value });
  };

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.setState({ value: this.state.input });
          }}
        >
          <input
            type="text"
            id="user-in"
            onChange={this.handleInput}
            value={this.state.input}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
