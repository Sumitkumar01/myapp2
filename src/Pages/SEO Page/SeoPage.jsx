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
import "./seopage.css";
import { Helmet } from "react-helmet";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";
// import SeoPopUp from "../../popup-component/seo-pop-up/SeoPopUp";

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

const SeoPage = () => {
  // const [show, setShow] = useState(true);

  ScrollTop();
  return (
    <>
      <Helmet>
        <title>India's Leading Hospitality SEO Agency - Fielmente</title>
        <meta
          name="description"
          content="Fielmente: Your trusted hospitality SEO agency, providing targeted marketing services for hotels, restaurants, cloud kitchens, and resorts."
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
        <Section1 />
        {/* {show && <SeoPopUp setShow={setShow} />} */}
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

export default SeoPage;
