import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import logo from "../../Assests/Images/cropped-fielmente-logo.webp";
import Accordion from "react-bootstrap/Accordion";
import contact1 from "../../Assests/Images/contact1.png";
import contact2 from "../../Assests/Images/contact2.png";
import contact3 from "../../Assests/Images/contact3.png";
import formImg from "../../Assests/Images/contactformimg.png";
import { Helmet } from "react-helmet";
import NavigationBar from "../../Component/NavigationBar";
import WhatsApp from "../../chat-component/WhatsApp";
import Footer from "../../Component/Footer";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";

const Contact = () => {
  ScrollTop();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Helmet>
        <title>Contact Fielmente - Fielmente</title>
        <meta
          name="description"
          content="Contact usWe&#039;re here just for you.We are always ready to lend an ear, offer advice and get your project over the line.We are always ready to lend an ear, offer advice and get your project over the line.                  Connect with UsHow can we help you right now?In order to make sure your website is user friendly and optimized for Google’s algorithm, our on-site optimization experts clean up the code and copy.        What is digital marketing?   Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth.       What is SEO?   SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website&#8217;s chances of being found by users searching for relevant information or products.       How does SEO affect your sales?   SEO can positively impact sales by:SEO drives sales by boosting visibility through higher rankings,SEO helps attracts potential customers actively seeking products/services.It helps in Higher Ranking. Top ranks establish credibilitySEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits.       What do you need to start your marketing?   To begin marketing effectively,You need to have a clear understanding of your target audience,You need defined goals,You should also have a well-designed marketing strategy,The major thing you should need is compelling content and suitable channels (like social media, website),You must have knowledge about Analytics tools to track performance.You should adapt and refine your approach based on data and audience response.       How does SEO work?   SEO works byOptimizing website elements (keywords, content, meta tags) to match user search intent.Search engines crawl and index these optimized pages, After that, it ranks them based on relevance and authority.Higher rankings lead to increased visibility and organic traffic.       How to start SEO Campaign?   Identify relevant keywords your audience searches for.Optimize your On-Page (webpage content, titles, and meta descriptions) with chosen keywords.Ensure site structure, speed, and mobile-friendliness, that is to optimize your Technical Sites.Create valuable, engaging, and shareable content.Secure high-quality backlinks from reputable websites.Make the best Analytics setup. Install tools to track performance and make data-driven adjustments. Fielmente"
        />
      </Helmet>
      <NavigationBar></NavigationBar>
      <div className="contactpage-wrapper">
        <div className="container">
          <div className="contact-page">
            <div className="page-header">
              <span>CONTACT US</span>
              <h2>We’re here just for you.</h2>
              <p>
                We are always ready to lend an ear, offer advice and get your
                project over the line.
              </p>
            </div>

            <div className="contact-form-div">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 contform-img-div">
                  <img src={formImg} alt="form-img" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 contact-page-form">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h3 className="mb-3 fs-4">Connect with Us</h3>
                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                          <Form.Control
                            type="text"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter the Email.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3 mobile-row">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Mobile Number.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Row>
                    <Button className="cont-subBtn btn-active" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>

            <div className="help-wrapper">
              <h2>How can we help you right now?</h2>
              <p>
                In order to make sure your website is user friendly and
                optimized for Google’s algorithm, our on-site optimization
                experts clean up the code and copy.
              </p>

              <div className="row contact-accr-div">
                <div className="col-12 col-md-6 col-lg-6">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What is digital marketing?
                      </Accordion.Header>
                      <Accordion.Body>
                        Digital marketing is all about promoting products,
                        services, or brands using online platforms, strategies,
                        and tools. It surrounds various channels like social
                        media, email, search engines, and websites to reach and
                        engage target audiences. Its main aim is to increase
                        awareness, conversions, and business growth.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What is SEO?</Accordion.Header>
                      <Accordion.Body>
                        SEO (Search Engine Optimization) is the practice of
                        optimizing website content, structure, and various other
                        factors to improve its visibility in search engine
                        results. This helps increase organic traffic(non-paid
                        traffic) and enhances a website’s chances of being found
                        by users searching for relevant information or products.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How does SEO affect your sales?
                      </Accordion.Header>
                      <Accordion.Body>
                        SEO can positively impact sales by:
                        <ul>
                          <li>
                            SEO drives sales by boosting visibility through
                            higher rankings,
                          </li>
                          <li>
                            SEO helps attracts potential customers actively
                            seeking products/services.
                          </li>
                          <li>
                            It helps in Higher Ranking. Top ranks establish
                            credibility
                          </li>
                          <li>
                            SEO also helps faster loading and
                            mobile-friendliness improve user experience, raising
                            engagement.
                          </li>
                          <li>
                            A successful strategy ensures lasting traffic and
                            sales growth, yielding sustained benefits.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <Accordion>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        What do you need to start your marketing?
                      </Accordion.Header>
                      <Accordion.Body>
                        To begin marketing effectively,
                        <ol>
                          <li>
                            You need to have a clear understanding of your
                            target audience,
                          </li>
                          <li>You need defined goals,</li>
                          <li>
                            You should also have a well-designed marketing
                            strategy,
                          </li>
                          <li>
                            The major thing you should need is compelling
                            content and suitable channels (like social media,
                            website),
                          </li>
                          <li>
                            You must have knowledge about Analytics tools to
                            track performance.
                          </li>
                        </ol>
                        You should adapt and refine your approach based on data
                        and audience response.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>How does SEO work?</Accordion.Header>
                      <Accordion.Body>
                        SEO works by
                        <ul>
                          <li>
                            Optimizing website elements (keywords, content, meta
                            tags) to match user search intent.
                          </li>
                          <li>
                            Search engines crawl and index these optimized
                            pages,
                          </li>
                          <li>
                            After that, it ranks them based on relevance and
                            authority.
                          </li>
                          <li>
                            Higher rankings lead to increased visibility and
                            organic traffic.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        How to start SEO Campaign?
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Identify relevant keywords your audience searches
                            for.
                          </li>
                          <li>
                            Optimize your On-Page (webpage content, titles, and
                            meta descriptions) with chosen keywords.
                          </li>
                          <li>
                            Ensure site structure, speed, and
                            mobile-friendliness, that is to optimize your
                            Technical Sites.
                          </li>
                          <li>
                            Create valuable, engaging, and shareable content.
                          </li>
                          <li>
                            Secure high-quality backlinks from reputable
                            websites.
                          </li>
                          <li>
                            Make the best Analytics setup. Install tools to
                            track performance and make data-driven adjustments.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="newsletter">
              <div className="iner-newsletter">
                <div className="news-imgdiv">
                  <img src={contact1} alt="images" />
                </div>
                <div className="news-imgdiv news-mid-img">
                  <img src={contact2} alt="images" />
                </div>
                <div className="news-imgdiv">
                  <img src={contact3} alt="images" />
                </div>
              </div>

              <div className="news-letter-div">
                <img src={logo} alt="Fielemente Logo" />
                <div>
                  <input
                    type="text"
                    placeholder="Enter you email for updates"
                  />
                  <button className="btn-active ms-lg-2">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <Call/>
      <WhatsApp/>
    </>
  );
};

export default Contact;
