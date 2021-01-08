import React from "react";

class Buttons extends React.Component {

    handleClick = () => {
        this.props.handleClick(this.props.name);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.runHandleClick}>{this.props.name}</button>        
            </div>
        )
    }
}

export default Buttons;
