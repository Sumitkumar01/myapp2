// import { motion } from "framer-motion";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import btnIcon from "../Assests/Images/arrow_right-349.png";

const QueryCard = (props) => {
  return (
    <div key={props.keys}>
      <Card style={{ flexDirection: props.index }}>
        {/* <Card.Img variant="top" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" /> */}

        <div className="query_imgDiv">
          <Card.Img variant="top" src={props.imageUrl} alt={props.heading} />
        </div>
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="queryBtn_div">
            <Link
              className="queryBtn btn-active"
              to={props.link}
              aria-label={props.btntext}
            >
              {props.btntext}
              <span className="visually-hidden">{props.btntext}</span>
              {/* <img src={btnIcon} alt="btn-icon" style={{ width: "1rem" }} /> */}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QueryCard;
