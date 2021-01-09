import React from "react";

class Display extends React.Component {
 
    render() {
        return(
            <div id="display">
                {this.props.currentNumberOnDisplay}
            </div>
        )
    }
}

export default Display;