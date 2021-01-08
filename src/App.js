import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>JS Calculator</h1>
        <Display/>
        <Buttons/>
      </div>
    )
  }
}

export default App;
