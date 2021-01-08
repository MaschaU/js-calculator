import React from "react";

class Display extends React.Component {
 
    render() {
        return(
            <div className="display">
                {this.props.currentNumberOnDisplay}   
            </div>
        )
    }
}

export default Display;