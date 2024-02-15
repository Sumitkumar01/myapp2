import React from "react";
import "./seopop.css";
import "../popup-styles/popup-style.css";
import Img from "../../Assests/pop-up-img/seo-pop-up-img.png";
import { FaCheckCircle } from "react-icons/fa";
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
function SeoPopUp({setShow}) {
  const data = [
    { text: "Maximize Visibility" },
    { text: "Maximize Visibility" },
    { text: "Build Credibility" },
    { text: "Boost Direct Bookings" },
  ];
  return (
    <section className="d-flex justify-content-center align-items-center pop_up overflow-y-auto py-10 " >
      <div className="seo_pop_up-container">
        <div className="seo_pop_up-content">
          <button className="mob_cancel_btn position-absolute border-0 d-block d-sm-block d-md-none d-lg-none" onClick={()=> setShow(false)}>
            <img src={cancelBtn} alt="cancelBtn" />
          </button>
          <div
            className="left_section-img_div"
            // style={{ backgroundImage: `url(${Img})` }}
          >
            <img src={Img} alt="avatar" className="img-fluid h-100" />
          </div>
          <div className="right_section-content-container position-relative d-flex flex-column justify-content-evenly p-xl-5 py-lg-4 px-lg-5 p-md-4 px-3 py-2">
            <button className="cancel_btn position-absolute border-0" onClick={()=> setShow(false)}>
              <img src={cancelBtn} alt="cancelBtn" />
            </button>
            <div>
              <h2 className="c-fw-7 pop_up_heading">
                Want to increase your hotel visibility by 70%?
              </h2>
              <p className="c-fw-4 pop_up-content_text clr_text_gray clr_text_blue_dark">
                Hotels that rank on the first page of search results receive{" "}
                <b>10x more</b> clicks. 
              </p>
            </div>
            <div>
              <p className="pop_up-content_text c-fw-4 clr_text_gray">
                Get better rankings with customized SEO services from Fielmente,
                India’s leading Hotel Marketing Company.
              </p>
              <div className="row m-0 p-0">
                {data.map((item, i) => (
                  <div className="col-6 p-0" key={i}>
                    <p className="pop_up-content_text clr_text_gray c-fw-4 d-inline-flex align-content-center justify-content-center">
                      <FaCheckCircle className="clr_text_blue_dark me-1" />{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="d-flex flex-column gap-3">
                <div className="input_div border-bottom">
                  <input
                    type="email"
                    placeholder="Type Your Email"
                    required
                    className=" border-0 clr_text_blue_dark"
                  />
                </div>
                <div className="text-center w-100">
                  <button className="seo_pop_up-button btn_active c-fw-6">
                    Get a Free Website Audit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoPopUp;
