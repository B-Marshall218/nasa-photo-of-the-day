import React, { useState } from "react";
import rocketship from "../assests/rocketship.png";
// import NasaData from "./NASAData";
import styled from "styled-components";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col,
} from "reactstrap";


const DateButton = styled.button`
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
const SpaceImage = styled.img`
height: 40em;
width: auto;
border-radius: 4px;
box-shadow: 0 5px 30px;
object-fit: scale;
`;

const NasaContainer = styled.div`
  border: 4px solid blue;
  width: 50rem;
`;

const NasaCard = props => {
    // const { photo } = props
    return (
        <div>
            <NasaContainer>
                {/* <div className="container"> */}
                <Col xs="1" md="4" xl="3">
                    <Card>
                        <CardBody>
                            <CardTitle className="header">NASA'S Photo of the Day!</CardTitle>
                            {/* <h1 className="header">NASA'S Photo of the Day!</h1> */}
                            <img className="logo" src={rocketship} alt="picture of nasa rocket ship" />
                            <CardSubtitle className="title"> {props.title} </CardSubtitle>
                            {/* <h2 className="title"> {props.title} </h2> */}
                            <CardImg className="space-image" alt="random image" src={props.imgUrl} />
                            {/* <SpaceImage alt="random image" src={props.imgUrl} /> */}
                            <CardText> Date: {props.date}</CardText>
                            {/* <h3>Date: {props.date}</h3> */}
                            <div className="bottom">
                                {/* <Button>Change Date</Button> */}
                                <label>Date:
                                    <input type="text"
                                        name="date"
                                        placeholder="YYY-MM-DD"
                                    // onChange={userInput}
                                    />
                                </label>
                                <DateButton>Change Date</DateButton>

                                {/* <CardText>{props.explanation}</CardText> */}
                                <p>{props.explanation}</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </NasaContainer>
            {/* </div> */}

        </div >
    );
};

export default NasaCard; 