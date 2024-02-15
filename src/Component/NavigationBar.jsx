import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assests/Images/cropped-fielmente-logo.webp";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = () => {
  const [show,close] = useState(false)
  return (
    <>
      <div className="main_navbar">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand className="logo" as={NavLink} to="/">
              <img src={Logo} alt="Fielmente logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mid_nav">
                <Nav.Link
                  as={NavLink}
                  to="/about-fielmente-best-hospitality-marketing-agency/"
                >
                  About
                </Nav.Link>
                <span>&#124;</span>
                <NavDropdown
                  title="Industries We Serve"
                  id="basic-nav-dropdown" onMouseEnter={()=>close(true)} onMouseLeave={()=>close(false)}
                >
                  <NavDropdown.Item as={NavLink} to="/industries-we-serve/">
                    Industries We Serve
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/industries-we-serve/hotel-marketing-agency/"
                  >
                    Hotel Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/industries-we-serve/restaurant-marketing-agency/"
                  >
                    Restaurant Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/industries-we-serve/cloud-kitchen-marketing-agency/"
                  >
                    Cloud Kitchen Marketing
                  </NavDropdown.Item>
                </NavDropdown>
                <span>&#124;</span>
                <NavDropdown title="Services" id="basic-nav-dropdown-1">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/hospitality-marketing-services/"
                  >
                    Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/hospitality-marketing-services/website-development-agency/"
                  >
                    Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/hospitality-marketing-services/social-media-marketing-agency/"
                  >
                    Social Media Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/hospitality-marketing-services/seo-agency/"
                  >
                    Serach Engine Optimization(SEO)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/hospitality-marketing-services/google-ads-agency/"
                  >
                    Paid Ad Campaigns
                  </NavDropdown.Item>
                </NavDropdown>
                <span>&#124;</span>
                {/* <Nav.Link as={NavLink} to="/our-team/">
                  Our Team
                </Nav.Link>
                <span>&#124;</span> */}
                {/* <Nav.Link as={NavLink} to="/our-work/">
                  Our Work
                </Nav.Link>
                <span>&#124;</span> */}
                <Nav.Link as={NavLink} to="/blog/">
                  Blogs
                </Nav.Link>
                <span>&#124;</span>
                <Nav.Link as={NavLink} to="/contact/">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Nav.Link className="navphone" as={Link} to="tel:+919501868775">
                <i className="fa-solid fa-phone"></i>+919501868775
              </Nav.Link>
            </Navbar.Collapse>
          </Container> 
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
