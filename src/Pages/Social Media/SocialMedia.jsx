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
import "./socialpage.css";
import { Helmet } from "react-helmet";

import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";
// import SocialMediaPopUP from "../../popup-component/SocialMedia/SocialMediaPopUP";

const SocialMedia = () => {
  // const [show, setShow] = useState(true);
  ScrollTop();
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
          India's Best Hospitality Social Media Marketing Agency - Fielmente
        </title>
        <meta
          name="description"
          content="Rocket your brand's online presence with Fielmente, the top hospitality social media marketing agency. Boost success with our expert!"
        />
      </Helmet>
      {/* {show && <SocialMediaPopUP setShow={setShow} />} */}

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

export default SocialMedia;
