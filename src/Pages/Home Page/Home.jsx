import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import Marketingcard from "../../Component/Marketingcard";
import MoreBtn from "../../Component/MoreBtn";
import { animated, useSpring } from "@react-spring/web";

import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import WorkCard from "../../Component/WorkCard";
import QueryCard from "../../Component/QueryCard";
import Contact from "../../Component/Contact";

import ingle from "../../Assests/Images/ingle.png";
import bharat from "../../Assests/Images/9.png";
import medium from "../../Assests/Images/medium.png";
import klusster from "../../Assests/Images/klusster.png";
import stories from "../../Assests/Images/3.png";

import seoimage from "../../Assests/Images/seo.png";
import hotelsocialimg from "../../Assests/Images/hotelsocial.png";
import hotelrestroimg from "../../Assests/Images/hotel&restaurant.png";
import webdevimg from "../../Assests/Images/Websitedevelopment.png";

// Banner Images

import banner1 from "../../Assests/Images/banner1.webp";
import banner2 from "../../Assests/Images/banner2.webp";
import banner3 from "../../Assests/Images/banner3.webp";

// Why choose us
import WhyUsCard from "../../Component/WhyUsCard";
import webprogimg from "../../Assests/Images/web-programming.webp";
import searchengine from "../../Assests/Images/searchengine.webp";
import Expertise from "../../Assests/Images/Expertise.webp";
import paidAdd from "../../Assests/Images/paidAdd.webp";
import hospitalitymrketing from "../../Assests/Images/hospitalitymrketing.webp";
import StrategicSocialMedia from "../../Assests/Images/StrategicSocialMedia.webp";

// Work with us
import Consultingimg from "../../Assests/Images/consent.webp";
import stratigyimg from "../../Assests/Images/stratigy.webp";
import designingimg from "../../Assests/Images/designing.webp";

// Marketing Sction
import cloudKitchenimg from "../../Assests/Images/cloudKitchen.webp";
import restromarketingimg from "../../Assests/Images/restromarketing.webp";
import hotelMarktingimg from "../../Assests/Images/hotelMarkting.webp";
import marketing1 from "../../Assests/Images/marketing1.webp";
import marketing2 from "../../Assests/Images/marketing2.webp";

// Client Images
import bharirawaha from "../../Assests/Images/clients/bharirawaha.webp";
import burffs from "../../Assests/Images/clients/burffs.webp";
import burkey from "../../Assests/Images/clients/burkey.webp";
import desiBar from "../../Assests/Images/clients/desiBar.webp";
import dhruvees from "../../Assests/Images/clients/dhruvees.webp";
import donergyro from "../../Assests/Images/clients/donergyro.webp";
import doubletree from "../../Assests/Images/clients/doubletree.webp";
import ebc from "../../Assests/Images/clients/ebc.webp";
import fgdimg from "../../Assests/Images/clients/fgdimg.webp";
import gharsekhana from "../../Assests/Images/clients/gharsekhana.webp";
import goldentulip from "../../Assests/Images/clients/goldentulip.webp";
import HakkaClub from "../../Assests/Images/clients/HakkaClub.jpg";
import hotelmarriote from "../../Assests/Images/clients/hotelmarriote.webp";
import lakefront from "../../Assests/Images/clients/lakefront.webp";
import parkplaza from "../../Assests/Images/clients/parkplaza.webp";
import radission from "../../Assests/Images/clients/radission.webp";
import Vidli from "../../Assests/Images/clients/Vidli-Cloud-Kitchens.webp";
// blogs img

import blogimg1 from "../../Assests/blog/asset-2.png";
import blogimg2 from "../../Assests/blog/asset-3.png";
import blogimg3 from "../../Assests/blog/asset-4.jpeg";

import { Helmet } from "react-helmet";
import WhatsApp from "../../chat-component/WhatsApp";
import Footer from "../../Component/Footer";
import Call from "../../chat-component/Call";
import { Link } from "react-router-dom";
import ScrollTop from "../../Component/ScrollTop";
// import HomePagePopUP from "../../popup-component/home-page/HomePagePopUP";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Home = () => {
  ScrollTop();

  // const [show, setShow] = useState(true);
  const pressRelease = [
    { url: bharat, alt: "Bharat-img" },
    { url: ingle, alt: "ingle-img" },
    { url: klusster, alt: "klusstar-img" },
    { url: medium, alt: "medium-img" },
    { url: stories, alt: "stories-img" },
  ];

  const blogsData = [
    {
      url: blogimg1,
      imgtitle: "hotel",
      title: "How to Reply to Google business Profile and Facebook Feedback",
      month: "October ",
      date: "12, 2023",
    },
    {
      url: blogimg2,
      imgtitle: "hotel",
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
      month: "October ",
      date: "11, 2023",
    },
    {
      url: blogimg3,
      imgtitle: "Branding",
      title:
        "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
      month: "August ",
      date: "26, 2023",
    },
    {
      url: blogimg1,
      imgtitle: "hotel",
      title: "How to Reply to Google business Profile and Facebook Feedback",
      month: "October ",
      date: "12, 2023",
    },
    {
      url: blogimg2,
      imgtitle: "hotel",
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
      month: "October ",
      date: "11, 2023",
    },
    {
      url: blogimg3,
      imgtitle: "Branding",
      title:
        "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
      month: "August ",
      date: "26, 2023",
    },
  ];
  const CardData = [
    {
      link: "/industries-we-serve/cloud-kitchen-marketing-agency/",
      heading: "Cloud Kitchen Marketing",
      imageUrl: cloudKitchenimg,
      description:
        "Once your cloud kitchen is established, you will be looking at how to increase online orders, boost sales & grow business. We help to maximize revenue in a better way",
    },
    {
      link: "/industries-we-serve/restaurant-marketing-agency/",
      heading: "Restaurant Marketing",
      imageUrl: restromarketingimg,
      description:
        "Combining content marketing, social media, SEO, paid advertising and we’ll make sure your restaurant not only becomes the hottest spot in the city but that it stays that way",
    },
    {
      link: "/industries-we-serve/hotel-marketing-agency/",
      heading: "Hotel Marketing",
      imageUrl: hotelMarktingimg,
      description:
        "If you are looking for the best hotel advertisement company, you will always find us standing near you with our targeted, site specific programs to boost your branding",
    },
    // {
    //   link: "/industries-we-serve/restaurant-marketing-agency/",
    //   heading: "Café Marketing",
    //   imageUrl: cloudKitchenimg,
    //   description:
    //     "We got your café covered. Our transformational approach for café management and deep insight into the F&B Industry deliver incredible value and results to our clients.",
    // },
  ];

  const WhyUsCardData = [
    {
      heading: "Expertise in Hospitality",
      imageUrl: Expertise,
      description:
        "With a decade of experience in the hospitality industry, we are the perfect partner to market your hotel, restaurant, or cloud kitchen",
    },
    {
      heading: "Strategic Social Media Management",
      imageUrl: StrategicSocialMedia,
      description:
        "Take advantage of the power of social media to boost your brand’s exposure engage your target audience",
    },
    {
      heading: "Optimized for Search Engines",
      imageUrl: searchengine,
      description:
        "Maximize your hotel’s online visibility and increase organic traffic through search engine optimization",
    },
    {
      heading: "Effective Paid Advertising Campaigns",
      imageUrl: paidAdd,
      description:
        "Get the best results with our impactful campaigns that bring in targeted visitors and maximize your return on investment",
    },
    {
      heading: "Customized Hospitality Marketing Solutions",
      imageUrl: hospitalitymrketing,
      description:
        "A compelling reason for you to choose our hospitality marketing agency is our commitment to providing tailored and customized marketing solutions.",
    },
    {
      heading: "Exceptional Hospitality Website Development",
      imageUrl: webprogimg,
      description:
        "Our website development expertise provides an outstanding user experience from design to functionality",
    },
  ];

  const WorkCardData = [
    {
      color: "#E9D175",
      heading: "Consulting",
      imageUrl: Consultingimg,
      description:
        "Realize the full potential your business with our insightful feedback and practical strategies.",
    },
    {
      color: "#9896FF",
      heading: "Story Telling",
      imageUrl: stratigyimg,
      description:
        "We captivate customers through compelling narratives that focus on people, place, plot and purpose.",
    },
    {
      color: "#EEEEEE",
      heading: "Designing",
      imageUrl: designingimg,
      description:
        "Make a lasting impression on potential customers with visually stunning designs that grab attention.",
    },
  ];

  const QuaryCardData = [
    {
      link: "/hospitality-marketing-services/social-media-marketing-agency/",
      heading: "Hotel & Restaurant Social Media Marketing",
      imageUrl: hotelsocialimg,
      btntext: "Get Free Report",
      description:
        "For businesses in the Hospitality industry, social media is a boon that lets more potential customers know about your business and helps you to accelerate your brand image. Our quirky social team manages the overall ideation, graphic designing, copywriting, and monitoring that will help you to skyrocket your overall engagement with the customers.",
    },
    {
      link: "/hospitality-marketing-services/seo-agency/",
      heading: "Hotel & Restaurant Search Engine Optimization",
      imageUrl: seoimage,
      btntext: "Get Free Report",
      description:
        "With our professional SEO services, we ensure that your sites will achieve high ranks on Google and different search engines. We’ve been providing tailored solutions to businesses hoping to broader their online presence and ROI. Our tried-and-true SEO techniques have brought immense success for clients.",
    },
    {
      link: "/hospitality-marketing-services/google-ads-agency/",
      heading: "Hotel & Restaurant Paid Advertisement",
      imageUrl: hotelrestroimg,
      btntext: "Get Free Report",
      description:
        "When it comes to paid promotion, our ad experts strive to craft personalized and effective social media strategies that drive more customers as well as revenue to your business. With a team of PPC experts, we are well-known for delivering real end results to our clients quickly as well as efficiently.",
    },
    {
      link: "/hospitality-marketing-services/website-development-agency/",
      heading: "Hotel Website Development",
      imageUrl: webdevimg,
      btntext: "Get a Quote",
      description:
        "Are you in need of a website that effectively represents your brand and drives results? Look no further! Our Marketing Agency offers top-notch hotel website development services that will take your online presence to the next level.",
    },
  ];
  const client = [
    { img: bharirawaha, link:'https://bhairahawagardenresort.com/' },
    { img: burffs, link:'https://www.burffandberries.com/' },
    { img: burkey, link:'https://burkey.in/' },
    { img: desiBar, link:'https://www.desibarandgrill.ca/' },
    { img: dhruvees, link:'https://www.dhruvees.com/' },
    { img: donergyro, link:'https://www.donerandgyrosindia.com/' },
    { img: doubletree, link:'https://www.hilton.com/en/brands/doubletree-by-hilton/' },
    { img: ebc, link:'https://ebcmussoorie.com/' },
    { img: fgdimg, link:'https://fossetta.in/' },
    { img: gharsekhana, link:'' },
    { img: goldentulip, link:'https://www.goldentulip.com/en-us/' },
    { img: HakkaClub, link:'https://thehakkaclub.ca/' },
    { img: hotelmarriote, link:'https://marriott-hotels.marriott.com/' },
    { img: lakefront, link:'' },
    { img: parkplaza, link:'' },
    { img: radission, link:'' },
    { img: Vidli, link:'' },
  ];

  return (
    <div className="main_navbar">
      <Helmet>
        <title>
          Fielmente - India&#039;s Leading Hospitality Marketing Agency
        </title>
        <meta
          name="description"
          content="We&#039;re the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years."
        />
      </Helmet>
      <NavigationBar />
      {/* popup */}
      {/* {show && <HomePagePopUP setShow={setShow} />} */}
      {/* popup */}
      <div className="banner">
        <div className="container">
          <h1 className="my-4">
            Hospitality <br /> Marketing Agency
            {/* <Typewriter
              words={[`Hospitality`, `Marketing Agency`]}
              loop={100}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /> */}
          </h1>
          <p>
            India’s Leading Hotel & Restaurant Marketing Agency for over 10+
            Years Experience
          </p>

          <div className="Banner-imgDiv">
            <div className="leftImg-div">
              <img src={banner1} alt="banner-img" />
            </div>

            <div className="midImg-div">
              <img src={banner2} alt="banner-img" />
            </div>

            <div className="rytImg-div">
              <img src={banner3} alt="banner-img" />
            </div>
          </div>

          <div className="banner_counters">
            <div className="bnr-counter-inr">
              <span className="count-num">
                <Number n={100} />+
              </span>
              <span>Hotels</span>
            </div>
            <div className="bnr-counter-inr">
              <span className="count-num">
                <Number n={120} />+
              </span>
              <span>Restaurants</span>
            </div>
            <div className="bnr-counter-inr">
              <span className="count-num">
                <Number n={5} />+
              </span>
              <span>Countries</span>
            </div>
            <div className="bnr-counter-inr">
              <span className="count-num">
                <Number n={10} /> +
              </span>
              <span>Years of Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing section  */}

      <section className="container">
        <h2 className="markt_heding">Fielmente Marketing covers All</h2>
        <div className="marketing_div">
          {/* <Marketingcard /> */}

          <div className="d-lg-flex gap-3 d-none d-sm-none d-md-none">
            {CardData.map((data, i) => {
              return (
                <div key={i}>
                  <Marketingcard
                    heading={data.heading}
                    description={data.description}
                    imageUrl={data.imageUrl}
                    btnText="Know More"
                    btnLink={data.link}
                  />
                </div>
              );
            })}
          </div>

          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="d-lg-none"
          >
            {CardData.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <Marketingcard
                    heading={data.heading}
                    description={data.description}
                    imageUrl={data.imageUrl}
                    btnText="Know More"
                    btnLink={data.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Work With us section  */}

      <section className="section_dark my-2 py-2">
        <div className="container">
          <div className="work_text">
            <h2 className="fs-4">How We Work</h2>
            <p style={{ color: "gray" }}>
              Unlock the full potential of your Hospitality business with the
              best digital marketing strategies of our Hospitality Marketing
              Agency
            </p>
          </div>
          <div className="work_div">
            {WorkCardData.map((data, i) => {
              return (
                <WorkCard
                  k={i}
                  heading={data.heading}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  backgroundColor={data.color}
                />
              );
            })}
          </div>

          <div className="work_div_secnd">
            <div className="inner_wrokDiv work_imgDiv">
              <div className="leftImg">
                <img src={marketing2} alt="marketing-img" />
              </div>
              <div className="rytImg">
                <img src={marketing1} alt="marketing-img" />
              </div>
            </div>
            <div className="inner_wrokDiv workDiv_text">
              <h2>
                Who are you Looking for? Just another marketer or
                Hospitality-Rooted Marketer ?
              </h2>
              <p>
                Transforming hotels & restaurants into thriving destinations
                with our expert hotel marketing solutions.
              </p>
              <p>
                Elevate your restaurants's reach and revenue with fielmente -
                world's leading restaurant marketing agency.
              </p>

              <div className="counters_div">
                <div className="inner_count">
                  <h2 style={{ color: "#E9D175" }}>
                    <Number n={112} />+
                  </h2>
                  <p>Hotels & restaurants</p>
                </div>
                <div className="inner_count">
                  <h2 style={{ color: "#E9D175" }}>
                    <Number n={89} />%
                  </h2>
                  <p>Bussiness Growth</p>
                </div>
              </div>

              <div className="text-center py-3">
                <MoreBtn Btntext="Know more" btnLink="/contact/" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section  */}

      <section className="container section-wrapper partners_section my-2 py-2">
        <h2 className="text-center">
          <span>Our</span> Clients
        </h2>

        <Swiper
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
          spaceBetween={10}
          // loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {client.map((item, i) => (
            <SwiperSlide
              key={i}
              // style={{width:"max-content"}}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "13rem" }}
              >
                <Link to={item.link} target="_blank">
                  <img src={item.img} alt="client-img" className="img-fluid" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Us Seection  */}

      <section className="container section-wrapper whyUs_wrapper my-2 py-2">
        <h2>
          <span>Why</span> Choose Us?
        </h2>
        <h3 className="whyus-midhead">
          <span className="pe-2 ps-lg-5 py-lg-3 ps-md-5 py-md-3 ps-4 py-2 c-span">
            Force
          </span>{" "}
          of 22+ Hospitality Marketing Experts
        </h3>

        <div className="why_us">
          {WhyUsCardData.map((data, i) => {
            return (
              <WhyUsCard
                key={i}
                heading={data.heading}
                description={data.description}
                imageUrl={data.imageUrl}
              />
            );
          })}

          {/* <Marketingcard /> */}
        </div>

        <p className="my-4">
          Choose Fielmente - Hospitality Marketing Agency as your partner and
          get benefitted from our industry expertise and results-driven focus to
          take your hotel or restaurant to new heights of success in the digital
          realm.
        </p>

        {/* <MoreBtn
          Btntext="Learn more"
          btnLink="/industries-we-serve/hotel-marketing-agency/"
        /> */}

        {/* <Button>Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g clipPath="url(#clip0_1014_925)">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.8594 2.85986L9.71138 3.97432L15.797 10.0599H2.85938V11.6599H15.797L9.72817 17.7286L10.8594 18.8599C13.7882 15.9311 16.0562 13.6631 18.8594 10.8599L10.8594 2.85986Z" fill="white" stroke="white" />
            </g>
            <defs>
              <clipPath id="clip0_1014_925">
                <rect width="16" height="16" fill="white" transform="translate(0 7.68848) rotate(-28.7203)" />
              </clipPath>
            </defs>
          </svg>
        </Button> */}
      </section>

      {/* Enqury Section  */}

      <section className="container my-2 py-2">
        <div className="enqury">
          <h2>Got an Enquiry</h2>
          <h3>Propel Your brand with Fielmente Hospitality Marketing Agency</h3>
          <MoreBtn Btntext="Learn more" btnLink="/contact/" />

          {/* <Button>Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g clipPath="url(#clip0_1014_925)">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8594 2.85986L9.71138 3.97432L15.797 10.0599H2.85938V11.6599H15.797L9.72817 17.7286L10.8594 18.8599C13.7882 15.9311 16.0562 13.6631 18.8594 10.8599L10.8594 2.85986Z" fill="white" stroke="white" />
              </g>
              <defs>
                <clipPath id="clip0_1014_925">
                  <rect width="16" height="16" fill="white" transform="translate(0 7.68848) rotate(-28.7203)" />
                </clipPath>
              </defs>
            </svg>
          </Button> */}
        </div>
        <div className="quryCard_div">
          {QuaryCardData.map((data, index) => {
            return (
              <QueryCard
                keys={index}
                heading={data.heading}
                imageUrl={data.imageUrl}
                description={data.description}
                btntext="Learn More"
                link={data.link}
                index={index % 2 !== 0 ? "row" : "row-reverse"}
              />
            );
          })}

          {/* <QueryCard /> */}
        </div>
      </section>

      {/* Press Realease Section */}

      <section className="container section-wrapper my-2 py-2">
        <h2>
          <span>Press</span> Release
        </h2>
        <p>
          Create ROI driven social media campaign and content for your
          hospitality business.
        </p>

        <div className="press-release">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {pressRelease.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.url} alt={item.alt} />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="container section-wrapper my-2 py-2">
        <h2>
          <span>Our</span> Blogs
        </h2>
        <p>
          Stay tuned and updated with the latest news and blogs on the
          hospitality business.
        </p>
        <Swiper
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {blogsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="card text-start overflow-hidden">
                <Link
                  to="/blog/"
                  title="blog page"
                  className="text-d-none text-black"
                  style={{
                    // width: "315px",
                    height: "213.4px",
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    className="w-100 h-100 d-flex align-items-start justify-content-end p-3"
                    style={{
                      backgroundColor:
                        "linear-gradient(0deg, rgba(0,0,0,10) 0%, rgba(0,0,0,1) 27%)",
                    }}
                  >
                    <span
                      className="text-uppercase px-2 py-1 rounded-5 c-fw-6 text-white"
                      style={{ backgroundColor: "#F26633", fontSize: ".8rem" }}
                    >
                      {item.imgtitle}
                    </span>
                  </div>
                </Link>
                <div className="card-body">
                  <h3
                    className="card-title fs-6 c-fw-7 ff-p text-balance"
                    style={{ height: "5rem" }}
                  >
                    {item.title}
                  </h3>
                  <Link
                    to="/blog/"
                    title="read more"
                    className="text-d-none text-orange text-uppercase c-fw-7 fs-6"
                  >
                    <span className="visually-hidden">read more</span>
                    read more 
                    <small>&gt;&gt;</small>
                  </Link>
                </div>
                <div className="d-flex border-1 border-top">
                  <p className="c-fw-3 ff-p ps-3 py-2 mb-0 fs-6 text-black">
                    {item.month} {item.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Contact />
      <Footer />
      <Call />
      <WhatsApp />
    </div>
  );
};

export default Home;
