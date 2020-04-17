import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NASACard";
import styled from "styled-components";
import { Container, Row } from "reactstrap";

const DumbButton = styled.div`
    background: whitesmoke;
    color: black;
    font-size: 1em;
    font-weight: 60;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 8px;
    &:hover {
    background: black;
    color: whitesmoke;
    }
`;

const NasaData = () => {
    const [photo, setPhoto] = useState([])
    const [date, setDate] = useState("2012-03-14")
    const [input, setInput] = useState("")

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=yGhedI4veSOHtiDq5twvTCBxWMd7EvOIehwZFxVL&date=${date}`)
            .then(res => {
                console.log(res);
                setPhoto(res.data)
            })
            .catch(err => console.log("error", err));
    }, [date]);

    function userInput(event) {
        console.log(event.target.value)
        setInput(event.target.value)
    }

    let handleEvent = event => {
        console.log(input)
        setDate(input)
        event.preventDefault()
    }
    return (
        <Container>
            <Row>
                <div className="photo-container">
                    <NasaCard
                        imgUrl={photo.url}
                        explanation={photo.explanation}
                        date={photo.date}
                        title={photo.title}
                    />
                    <form>
                        <label>Date: <input type="number" name="date" placeholder="YYYY-MM-DD" onChange={userInput} /> </label>
                        <DumbButton onClick={handleEvent}>Set Date</DumbButton>
                    </form>
                </div>
            </Row>
        </Container>

    )
};

export default NasaData;

// imgUrl={photo.url} explanation={photo.explanation}

// `https://api.nasa.gov/planetary/apod?api_key=qhapjX3hbVHvsvXmnPTVGEcf5AvyMukgh2Z1Ewyv&date/${date}=2012-03-14`