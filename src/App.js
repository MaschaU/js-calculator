import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import Formula from "./Formula";

class App extends React.Component {
  state = {
    currentNumber: "0",
  }

  render() {
    return (
      <div>
        <h1>JS Calculator</h1>
        <Formula/>
        <Display currentNumber={this.state.currentNumber}/>
        <Buttons/>
      </div>
    )
  }
}

export default App;
