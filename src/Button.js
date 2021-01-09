import React from "react";

class Button extends React.Component {

    runHandleClick = () => {
        this.props.handleClick(this.props.name);
    }

    render() {
        return (
            <button id={this.props.id} onClick={this.runHandleClick}>{this.props.name}</button>       
        
        )
    }
}

export default Button;
