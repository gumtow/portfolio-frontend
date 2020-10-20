import React, { useState, useEffect } from "react";
import { getContentfulHomePage } from "../queries/index";

// import Layout from "../Layout";
import RichText from "./RichText";
// import ProjectThumbnails from "./ProjectThumbnail";

// import * as headings from "../styles/type";
// import {
//   MainBtn,
//   FlexCenter,
//   ProfileImage,
//   GridContainer,
//   NarrowWrapper,
// } from "../styles/layout";

// import { uuid } from "uuidv4";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = (props) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const theData = await getContentfulHomePage();
    setData(theData);
  };

  useEffect(() => {
    getData();
  }, []);


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 450, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  const { siteInfo } = props;
  // console.log("homepage data", data)
  if (Object.entries(data).length > 0) {
    return (
      <div>
        {/* HEADER SECTION */}

        <Container fluid className="header">
          <Container>
            <Nav>
              <p>Navigation Items</p>
            </Nav>
            <Row className="hero">
              <Col lg={4} className="align-items-center">
                <Row>
                  <h1>Hello,</h1>
                </Row>
                <Row>
                  <h3>my name is Jesse</h3>
                </Row>
                <Row>
                  <p>I am a human centered, front end software developer.</p>
                </Row>
                <Row>
                  <Col className="align-left">
                    <Button variant="primary" block>Get In Touch</Button>
                  </Col>
                  <Col className="align-left">
                    <Button variant="primary" block>My Work</Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={8} className="align-items-center">
                <img
                  src={
                    data.fields.contentSection[0].fields.headerImage.fields.file
                      .url
                  } alt="placeholder"
                />
              </Col>
            </Row>
          </Container>
        </Container>

        {/* ABOUT ME SECTION */}

        <Container fluid className="about">
          <Container>
            <Row>
              <Col md={{ span: 4, offset: 1 }}>
                <img src={siteInfo.profileImage.fields.file.url} alt="placeholder" />
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Row>
                  <h2>About Me</h2>
                </Row>
                <Row>
                  <p>
                    I am a front end software developer with a passion for
                    helping others. I have a diverse background ranging from
                    developing web applications in React.js, to managing brands
                    as a Creative Director. I am always looking for the next
                    challenge to stretch my perspective and grow my skills.
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* WORK SECTION */}

        <Container fluid className="work">
          <Container>
            <Row className="justify-content-md-center">
              <h2  data-aos="fade-in">Work</h2>
            </Row>

            {/* FIRST PROJECT */}  

            <Row className="project">
              <Col data-aos="fade-right" md={{ span: 4, offset: 1 }}>
                <img
                  src={
                    data.fields.contentSection[5].fields.thumbnail.fields.file
                      .url
                  } alt="placeholder"
                />
              </Col>
              <Col data-aos="fade-left" md={{ span: 5, offset: 1 }}>
                <Row>
                  <h3>Project Title</h3>
                </Row>
                <Row>
                  {data.fields.contentSection[5].fields.description && (
                    <RichText
                      content={data.fields.contentSection[5].fields.description}
                      class="description"
                    />
                  )}
                </Row>
                <Row>
                  <Col>
                    <Button variant="secondary" block>View Project</Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" block>View Code</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* SECOND PROJECT */}

            <Row className="project">
              <Col data-aos="fade-left" md={{ span: 4, offset: 1, order: 2 }}>
                <img
                  src={
                    data.fields.contentSection[5].fields.thumbnail.fields.file
                      .url
                  }  alt="placeholder"
                />
              </Col>
              <Col  data-aos="fade-right" md={{ span: 5, offset: 1, order: 1 }}>
                <Row>
                  <h3>Project Title</h3>
                </Row>
                <Row>
                  {data.fields.contentSection[5].fields.description && (
                    <RichText
                      content={data.fields.contentSection[5].fields.description}
                      class="description"
                    />
                  )}
                </Row>
                <Row>
                  <Col>
                    <Button variant="secondary" block>View Project</Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" block>View Code</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* THIRD PROJECT */}  

            <Row className="project">
              <Col data-aos="fade-right" md={{ span: 4, offset: 1 }}>
                <img
                  src={
                    data.fields.contentSection[5].fields.thumbnail.fields.file
                      .url
                  }  alt="placeholder"
                />
              </Col>
              <Col data-aos="fade-left" md={{ span: 5, offset: 1 }}>
                <Row>
                  <h3>Project Title</h3>
                </Row>
                <Row>
                  {data.fields.contentSection[5].fields.description && (
                    <RichText
                      content={data.fields.contentSection[5].fields.description}
                      class="description"
                    />
                  )}
                </Row>
                <Row>
                  <Col>
                    <Button variant="secondary" block>View Project</Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" block>View Code</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* FOURTH PROJECT */}

            <Row className="project">
              <Col data-aos="fade-left" md={{ span: 4, offset: 1, order: 2 }}>
                <img
                  src={
                    data.fields.contentSection[5].fields.thumbnail.fields.file
                      .url
                  } alt="placeholder"
                />
              </Col>
              <Col  data-aos="fade-right" md={{ span: 5, offset: 1, order: 1 }}>
                <Row>
                  <h3>Project Title</h3>
                </Row>
                <Row>
                  {data.fields.contentSection[5].fields.description && (
                    <RichText
                      content={data.fields.contentSection[5].fields.description}
                      class="description"
                    />
                  )}
                </Row>
                <Row>
                  <Col>
                    <Button variant="secondary" block>View Project</Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" block>View Code</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>

        

        {/* FOOTER SECTION */}

        <Container fluid className="footer">
          <Container>
            <Row className="justify-content-md-center">
              <h2>Let's Connect</h2>
            </Row>
            <Row>
              <Col>
                <Button variant="sub" block>Link</Button>
              </Col>
              <Col>
                <Button variant="sub" block>Link</Button>
              </Col>
              <Col>
                <Button variant="sub" block>Link</Button>
              </Col>
              <Col>
                <Button variant="sub" block>Link</Button>
              </Col>
            </Row>
            <Row>
              <p id="disclaimer">Copyright 2020 Jesse Gumtow All Rights Reserved</p>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
  return <div>loading</div>;
};

export default HomePage;
