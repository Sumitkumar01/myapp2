import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import arrowIcon from "../Assests/Images/arrow_right-349.png";

const Marketingcard = (props) => {
  return (
    <>
      {/* {CardData.map((d) => {
                return ( */}

      <div className="markt_card">
        <Card>
          <div className="marktcard_Imgdiv">
            <Card.Img variant="top" src={props.imageUrl} alt={props.heading} />
          </div>
          <Card.Body>
            <Card.Title>{props.heading}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <div className="moreBtn-div">
              <Link
                className="moreBtn btn-active"
                to={props.btnLink}
                variant="primary"
                aria-label={props.btnText}
                alt={props.btnText}
              >
                {props.btnText}
                <span className="visually-hidden">{props.btnText}</span>
                {/* <img
                  src={arrowIcon}
                  className=""
                  alt="icon"
                  style={{ width: "1rem" }}
                /> */}
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* )
            })} */}
    </>
  );
};

export default Marketingcard;
