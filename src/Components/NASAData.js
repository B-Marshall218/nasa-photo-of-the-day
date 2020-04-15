import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NASACard";

const NasaData = () => {
    const [photo, setPhoto] = useState([])
    // const [date, setDate] = useState("2012-03-14")
    // const [title, setTitle] = useState([])
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=qhapjX3hbVHvsvXmnPTVGEcf5AvyMukgh2Z1Ewyv&date=2012-03-14`)
            .then(res => {
                console.log(res);
                setPhoto(res.data)
            })
            .catch(err => console.log("error", err));
    }, []);
    return (

        <div className="photo-container">

            <NasaCard
                imgUrl={photo.url}
                explanation={photo.explanation}
                date={photo.date}
                title={photo.title}
            />
        </div>

    )
};

export default NasaData;

// imgUrl={photo.url} explanation={photo.explanation}

// `https://api.nasa.gov/planetary/apod?api_key=qhapjX3hbVHvsvXmnPTVGEcf5AvyMukgh2Z1Ewyv&date/${date}=2012-03-14`