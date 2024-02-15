import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/Marketing/confident-manager-restaurant 1.png";

import icon1 from '../../Assests/service/Svg-icons/1.svg'
import icon2 from '../../Assests/service/Svg-icons/2.svg'
import icon3 from '../../Assests/service/Svg-icons/3.svg'
import icon4 from '../../Assests/service/Svg-icons/4.svg'


function Section1() {
  



const cardData = [
  {title:'hotels',iconUrl:icon1},
  {title:'resorts',iconUrl:icon2},
  {title:'restaurants',iconUrl:icon3},
  {title:'cloud kitchens',iconUrl:icon4}
]



  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "px-lg-0 px-2";
  const colClass1 = "col-lg-5  col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7  col-sm-12 p-2";
  const heading = "Why is Social Media Marketing Important for Your Business?";
  // const ptext =
  //   "Embrace the power of social media in the digital era with Fielmente, the leading hospitality social media marketing agency. Connect with your target audience, showcase your brand’s personality, and soar to new heights in the restaurant or hotel industry. With billions of active users on platforms like Facebook, Twitter, and Instagram, social media can be a game-changer for your business.";

  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div">
        <img src={Img3} alt="hotel-img" className="img-fluid" />
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5 text-lg-start text-center py-lg-1 py-3">
          Industries We Serve
        </h2>
        <div>
          <div className="d-flex flex-wrap gap-2 py-3">
          {cardData.map((item,i)=>(
            <div className="card card-body align-items-center justify-content-center gap-3" key={i} style={{width:"10rem"}}>
              <div className="rounded-circle d-flex align-items-center justify-content-center py-2" style={{width:'9rem',height:"9rem",backgroundColor:'#110D3C'}}>
                <img src={item.iconUrl} alt="icon" className="img-fluid" style={{width:'4rem',height:"3rem"}} />
              </div>
              <div style={{minHeight:'4rem'}}>
                <h3 className="text-center text-capitalize">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
          </div>
        </div>
        <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion text-justify">
          Fielmente is a place, where we excel in revolutionizing your business!
          As the finest hospitality marketing agency in India, we exclusively
          cater to hotels, cloud kitchens, and restaurants. Elevate your brand’s
          presence, thrive in competition, and allure countless guests with our
          exceptional hospitality marketing services.Let us be your key to
          success in the dynamic world of hospitality!
        </p>
        
      </div>
    </>
  );

  return (
    <>
      <div className="container mt-lg-4">
        <h2 className="text-clr-gray5 ff-p c-fw-6 h2-lg text-center">
          {heading}
        </h2>
      </div>
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </>
  );
}

export default Section1;
