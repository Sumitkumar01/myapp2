import React from "react";
const TestimonialCard = ({name,hotelName,story,img}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <div>
                <img
                  src={img}
                  alt="hero"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div>
                <h3 className="fs-5 c-fw-7 text-blue-3 text-capitalize">{name}</h3>
                <small className="fs-6 c-fw-4 text-capitalize">{hotelName}</small>
              </div>
            </div>
            <div className="card-text fs-6 c-fw-4 text-justify">{story}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
