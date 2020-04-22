import React from "react";

function Header(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className="col">
                    <h1 className="float-left">Seinfeld Clicky Game</h1>
                </div>
                <div className="col">
                    <h2 className="text-center">{props.direction}</h2>
                </div>
                <div className="col">
                    <h2 className="float-right">Score: {props.score} | Top Score: {props.topScore}</h2>
                </div>
            </nav>
        </div>
        )
    }
                            
                            
            
            

export default Header;