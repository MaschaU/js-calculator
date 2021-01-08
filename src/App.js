import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Display from "./Display";
import Formula from "./Formula";

class App extends React.Component {
  state = {
    currentNumberOnDisplay: "0",
  }

  render() {
    return (
      <div>
        <h1>JS Calculator</h1>
        <Formula/>
        <div className="calc-container">
          <Display currentNumberOnDisplay={this.state.currentNumberOnDisplay}/>
          <Buttons id="clear" name="AC" handleClick={this.handleClick}/> 
          <Buttons id="divide" name="/" handleClick={this.handleClick}/>
          <Buttons id="multiply" name="x" handleClick={this.handleClick}/>
          <Buttons id="seven" name="7" handleClick={this.handleClick}/>
          <Buttons id="eight" name="8" handleClick={this.handleClick}/>
          <Buttons id="nine" name="9" handleClick={this.handleClick}/>
          <Buttons id="subtract" name="-" handleClick={this.handleClick}/>
          <Buttons id="four" name="4" handleClick={this.handleClick}/>
          <Buttons id="five" name="5" handleClick={this.handleClick}/>
          <Buttons id="six" name="6" handleClick={this.handleClick}/>
          <Buttons id="add" name="+" handleClick={this.handleClick}/>
          <Buttons id="one" name="1" handleClick={this.handleClick}/>
          <Buttons id="two" name="2" handleClick={this.handleClick}/>
          <Buttons id="three" name="3" handleClick={this.handleClick}/>
          <Buttons id="zero" name="0" handleClick={this.handleClick}/>
          <Buttons id="equals" name="=" handleClick={this.handleClick}/>
          <Buttons id="decimal" name="." handleClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default App;
