import React from "react";
import Banner from "./Banner";
import BgImage from "../../Assests/industries-we-serve/asset-18.png";
import NumberCompnent from "../../Component/NumberCompnent";
import CardSection from "./CardSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import Section5 from "./Section5";
import "./webDev.css";
import { Helmet } from "react-helmet";

import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
// import WebDevePopUp from "../../popup-component/Web-Deve-pop-up/WebDevePopUp";
import ScrollTop from "../../Component/ScrollTop";

const WebDevPage = () => {
  ScrollTop();
  // const [show, setShow] = useState(true);
  const style = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const numberColClass = "col-lg-3 col-md-3 col-6";

  const data = [
    { number: "100", data: "+", text: "reviews" },
    { number: "88", data: "%", text: "increases in roas" },
    { number: "70", data: "+", text: "hoteliers trust us" },
    { number: "90", data: "+", text: "project completed" },
  ];

  return (
    <>
      <Helmet>
        <title>
          India's Best Hospitality Website Development Agency - Fielmente
        </title>
        <meta
          name="description"
          content="Grow your hospitality business with Fielmente's expert website development agency. Enhance UX/UI and drive bookings. Partner with us now!"
        />
      </Helmet>
      <NavigationBar />
      <div style={style}>
        <div className="container web-dev">
          <Banner />
          <NumberCompnent
            containerclassName="py-2"
            rowClass="justify-content-center my-lg-5 my-md-3 my-2"
            colClass={numberColClass}
            divClass="text-center"
            span1Class="text-light"
            span2Class="text-white"
            numberData={data}
          />
          <CardSection />
        </div>
        {/* {show && <WebDevePopUp setShow={setShow} />} */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Contact />
        <Footer />
        <WhatsApp />
        <Call />
      </div>
    </>
  );
};

export default WebDevPage;
