import React from "react";

class Display extends React.Component {
 
    render() {
        return(
            <div id="display">
                {this.props.currentExpression}
            </div>
        )
    }
}

export default Display;