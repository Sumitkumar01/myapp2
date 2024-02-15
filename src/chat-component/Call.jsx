import React from "react";
import { Link } from "react-router-dom";
import './chat.css'

function Call() {
  return (
    <div>
      <Link to="tel:+919501868775" className="call-icon text-d-none">
        <span className="sr-only">phone call</span>
        <i className="fa-solid fa-phone text-white"></i>
      </Link>
    </div>
  );
}

export default Call;
