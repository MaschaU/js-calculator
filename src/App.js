/* eslint-disable no-eval */
import React from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";


class App extends React.Component {

  state = {
    currentExpression: "0",
    previousButtonIsOperator: false,
    decimalAlert: false,
    previousButtonIsMinus: false
    
  }

  handleClick = (buttonName) => {
    let currentExpression = this.state.currentExpression;
    let previousButtonIsOperator = this.state.previousButtonIsOperator;
    let decimalAlert = this.state.decimalAlert;
    let previousButtonIsMinus = this.state.previousButtonIsMinus;

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
        if (currentExpression !== "0") { 
          currentExpression += buttonName;
          previousButtonIsOperator = false;
        } else {
          currentExpression = buttonName;
        }
      break;
      case "-":
        currentExpression += buttonName;
        decimalAlert = false;
        previousButtonIsMinus = true;
        // if the previous button pressed was an operator
        // the minus is "part" of the next number and will be considered "negative"
        // however! if the previous button pressed was NOT an operator
        // the minus is considered to be an operator
        previousButtonIsOperator = !previousButtonIsOperator;
      break;
      
      // if the last button pressed is an operator button
      case "+":
      case "/":
      case "*":
        // if the previous button pressed before that was an operator
        if (previousButtonIsOperator || previousButtonIsMinus) {
          // we need to discard the previous operator from the currentExpression
          const newExpression = currentExpression.slice(0,currentExpression.length-1);
          // and add the new pressed button to the expression
          currentExpression = newExpression + buttonName;
        } else {
          currentExpression += buttonName;
          decimalAlert = false;
        }

        previousButtonIsOperator = true;
      break;
      case "AC":
        currentExpression = "0";
        previousButtonIsOperator = false;
        decimalAlert = false;
      break;
      case "=":
        currentExpression = eval(currentExpression);
        previousButtonIsOperator = false;
      break;
      case ".":
        if(!decimalAlert) {
          currentExpression += ".";
          decimalAlert = true;
        }
        previousButtonIsOperator = false;
      break;

      default:
    }
    this.setState({
      currentExpression,
      previousButtonIsOperator,
      decimalAlert,
      previousButtonIsMinus,
    });
  }

  /*handleClick = (buttonName) => {

      // if button name = (0||1||etc)
      // let currentExpression = this.state.currentExpression
      // currentExpression += buttonName
      // this.setState({currentExpression})
    }*/    


  render() {
    return (
      <div id="calc-container">
        <Display id="display" currentExpression={this.state.currentExpression} />
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
