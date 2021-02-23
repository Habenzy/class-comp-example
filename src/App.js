import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Submit the Form to see this text change",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.setState(document.getElementById("user-in").value);
          }}
        >
          <input type="text" id="user-in" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
