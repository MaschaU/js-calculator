import React from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";


class App extends React.Component {

  state = {
    currentNumberOnDisplay: "0",
    operatorAlert: false,
  }

  handleClick = (buttonName) => {
    let currentNumberOnDisplay = this.state.currentNumberOnDisplay;
    let operatorAlert = this.state.operatorAlert;
    switch(buttonName) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": 
        if (this.state.currentNumberOnDisplay !== "0") { 
          currentNumberOnDisplay += buttonName;
          operatorAlert = false;
        } else {
          currentNumberOnDisplay = buttonName;
        }
      break;
      case "+":
      case "-":
      case "/":
      case "*":
        if (!this.state.operatorAlert) {
          currentNumberOnDisplay += buttonName;
          operatorAlert = true;
        } else {
          const newNumber = currentNumberOnDisplay.slice(0,currentNumberOnDisplay.length-1);
          currentNumberOnDisplay = newNumber;
          currentNumberOnDisplay += buttonName;
        } 
      break;
      case "AC":
        currentNumberOnDisplay = "0";
      break;
      default:
    }
    this.setState({currentNumberOnDisplay});
    this.setState({operatorAlert});
  }

  /*handleClick = (buttonName) => {

      // if button name = (0||1||etc)
      // let currentNumberOnDisplay = this.state.currentNumberOnDisplay
      // currentNumberOnDisplay += buttonName
      // this.setState({currentNumberOnDisplay})
    }*/    


  render() {
    return (
      <div id="calc-container">
        <Display id="display" currentNumberOnDisplay={this.state.currentNumberOnDisplay} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="clear" name="AC" handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="multiply" name="*" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
