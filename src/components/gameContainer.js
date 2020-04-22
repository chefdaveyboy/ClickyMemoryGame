import React from "react";


function GameContainer(props) {
    return (
        <div className = "container">
            <div className="row">{props.children}</div>
            <div className="row"></div>
        </div>
    )
}

export default GameContainer;