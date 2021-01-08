import React from "react";

class Display extends React.Component {
 
    render() {
        return(
            <div id="display">
                {this.props.currentNumber}   
            </div>
        )
    }
}

export default Display;