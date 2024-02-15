import React from "react";
import BlueLinkButton from "./BlueLinkButton";
// import { motion } from "framer-motion";

function WebCard({ title, imgUrl, text, link, linkText, classBtn,imgdiv,cardStyle,h3style }) {
  return (
    <div className="card card-body webcard py-2" style={cardStyle}>
      <div className="p-2 webcard-imgdiv" style={imgdiv}>
        <img src={imgUrl} className="img-fluid rounded-circle" loading="lazy" width={80} height={82} decoding="async" alt="icon" />
      </div>
      <div className="p-2">
        <h3 className="fs-5 c-fw-5 text-capitalize text-center m-0" style={h3style}>{title}</h3>
      </div>
      <div className="p-1">
        <p className="card-text text-center fs-6" style={{lineHeight:"1.5rem"}} >{text}</p>
      </div>
      <div className="p-2 text-center">
        <BlueLinkButton
          url={link}
          text={linkText}
          className={`btn-active text-capitalize  ${classBtn}`}
        />
      </div>
    </div>
  );
}

export default WebCard;
