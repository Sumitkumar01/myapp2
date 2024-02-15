import React from "react";
import Banner from "./Banner";
import NumberCompnent from "../../Component/NumberCompnent";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import BlueLinkButton from "../../Component/BlueLinkButton";
import Section5 from "./Section5";
import "./hotelpage.css";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import NavigationBar from "../../Component/NavigationBar";
import Call from "../../chat-component/Call";
import { Helmet } from "react-helmet";
import ScrollTop from "../../Component/ScrollTop";
// import InfluencerMarketing from "../../popup-component/influencer-marketing/InfluencerMarketing";

const HotelMarketing = () => {
  ScrollTop();
  // const [show, setShow] = useState(true);
  const numberColClass = "col-lg-3 col-md-3 col-6";

  const data = [
    { number: "50", data: "L+", text: "revenue generated" },
    { number: "10", data: "K+", text: "booking achieved" },
    { number: "90", data: "%", text: "satisfaction rate" },
    { number: "10", data: "+", text: "years of experience" },
  ];
  return (
    <div className="main_navbar">
      <Helmet>
        <title>
          Best Hotel Marketing Agency | Hotel Marketing Consultancy - Fielmente
        </title>
        <meta
          name="description"
          content="Fielmente: Your top choice for a hotel marketing Agency in India. Elevate your brand with our expert hotel marketing consultants to boost your online presence."
        />
      </Helmet>
      <NavigationBar />
      <Banner />
      <Section1 />
      {/* {show && <InfluencerMarketing setShow={setShow} />} */}
      <NumberCompnent
        containerclassName="py-2"
        rowClass="justify-content-center my-lg-5 my-md-3 my-2"
        colClass={numberColClass}
        divClass="text-center"
        span1Class="text-black"
        span2Class="text-black"
        numberData={data}
      />
      <div className="text-center py-3">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          url="/contact/"
          text="Contact us"
        />
      </div>
      <Section2 />
      <Section4 />
      <Section5 />

      <Contact />
      <Footer />
      <WhatsApp />
      <Call />
    </div>
  );
};

export default HotelMarketing;
