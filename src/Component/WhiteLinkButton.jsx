import React from "react";
import { Link } from "react-router-dom";

function WhiteLinkButton({url,text,className}) {
  return (
    <>
      <Link to={url} className={`white-link-button text-d-none ${className}`}>{text}</Link>
    </>
  );
}

export default WhiteLinkButton;
