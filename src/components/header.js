import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="col">
                    <h1 className="float-left">Clicky Game</h1>
                </div>
                <div className="col">
                    <h2 className="text-center">Click an image to begin!</h2>
                </div>
                <div className="col">
                    <h2 className="float-right">Score: 0 | Top Score: 0</h2>
                </div>
            </nav>
        </div>
        )
    }
                            
                            
            
            

export default Header;