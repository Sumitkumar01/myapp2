import React from "react";
import bgImg from "../../Assests/pop-up-img/Group-520.png";
import "./web_dev_pop_up.css";
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
import svg from "../../Assests/pop-up-img/right-tick.svg";
import { Link } from "react-router-dom";

function WebDevePopUp({ setShow }) {
  const list = [
    { listText: `Show Your Credibility` },
    { listText: `Boost Direct Booking` },
    { listText: `Advertise for Free` },
    { listText: `Save commission from OTAs` },
  ];
  return (
    <section className="pop_up">
      <div>
        <div
          className="web_dev_pop_up_container"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div
            className="w-100 h-100 p-xl-5 py-lg-4 px-lg-5  py-md-4 d-flex px-md-5 p-4 flex-column justify-content-between align-items-center position-relative"
            style={{ background: "background: rgba(133, 99, 0, 0.966)" }}
          >
            <button
              className="bg-transparent border-0 position-absolute cancelBtn"
              onClick={() => setShow(false)}
            >
              <img src={cancelBtn} alt="cancelBtn" />
            </button>
            <div>
              <h2 className="c-fw-7 pop_up_heading clr_white text-center">
                Is your website as attractive as your Hotel?
              </h2>
              <p className="c-fw-4 pop_up-content_text clr_white text-center">
                <bold className="c-fw-7">74%</bold> of Indians prefer booking
                through a website.
              </p>
            </div>
            <div>
              <p className="pop_up-content_text c-fw-4 clr_white text-center">
                At Fielmente, we transform your hotel's online presence into a
                revenue generating powerhouse.
              </p>
            </div>
            <div className="web_dev_pop_up">
              <h3 className="fs-4 ff-p c-fw-7 clr_white">
                Why build a website?
              </h3>
              <ul className="">
                {list.map((item, i) => (
                  <li
                    className="pop_up-content_text c-fw-6 clr_white text-justify d-flex align-items-center justify-content-start"
                    key={i}
                  >
                    <span className="d-flex justify-content-center align-items-center me-1" style={{ height: "1rem", width: "1rem" }}>
                      <img src={svg} className="img-fluid" alt="icon" />
                    </span>{" "}
                    {item.listText}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-1">
              <Link to="/contact/" className="web_dev_btn btn_active">
                Get your Website Designed in a Minute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDevePopUp;
