import React, { useState } from "react";
import rocketship from "../assests/rocketship.png";
// import NasaData from "./NASAData";


const NasaCard = props => {
    // const { photo } = props
    return (
        <div>
            <h1 className="header">NASA'S Photo of the Day!
            <img className="logo" src={rocketship} alt="picture of nasa rocket ship"
                // onClick={() => setDate("today")}
                />
            </h1>
            <h2 className="title"> {props.title} </h2>
            <img className="space-image" alt="random image" src={props.imgUrl} />
            <h3>Date: {props.date}</h3>
            <div className="bottom">
                <p>{props.explanation}</p>
            </div>

        </div>
    );
};

export default NasaCard; 