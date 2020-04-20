import React from "react";
import image from "../images/jerry.jpg";



function ImageCard(props) {
    return (
        <div className="card">
            <img 
            className="card-img" 
            alt="alt"
            src={image}
            // onClick={}
            />
            
        </div>
    )
}

export default ImageCard;