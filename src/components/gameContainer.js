import React, { Component } from "react";
import ImageCard from "./card";
import { render } from "@testing-library/react";



class GameContainer extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-columns">
                        <ImageCard />
                        <ImageCard />
                    </div>
                </div>
            </div>
        )
    }



}





export default GameContainer;