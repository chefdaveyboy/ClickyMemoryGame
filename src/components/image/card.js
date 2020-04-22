import React from "react";
import "./card.css"





function ImageCard(props) {
    return (
        <div>
        <div className="card col">
            <img 
            className="card-img" 
            alt= {props.name}
            src={props.image}
            onClick = {() => props.clicked(props.id)}
            />
            
        </div>
        </div>
    )
}

export default ImageCard;