import React, { Component } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />

        <VideoBanner />
        <AboutUs />
        <Gallery />
        <Contact />
      </>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <div className="bernese_signature">
            <div></div>
            <h2>BERNEŃSKA WATAHA</h2>
          </div>
          <div className="menu_section">
            <Link
              className="nav about_us"
              to="about_us"
              spy={true}
              smooth={true}
              duration={700}
            >
              {" "}
              O Nas
            </Link>
            <Link
              className="nav gallery"
              to="gallery"
              spy={true}
              smooth={true}
              duration={700}
            >
              Galeria
            </Link>
            <Link
              className="nav contact"
              to="contact"
              spy={true}
              smooth={true}
              duration={700}
            >
              {" "}
              Kontakt
            </Link>
          </div>
        </div>
      </>
    );
  }
}

class VideoBanner extends Component {
  render() {
    return (
      <>
      {/* <div className="video_banner"> */}

     
        <video   autoPlay loop muted>
          <source
            src="../videos/68b791eb-1d11-4276-a79b-64163eaa2f28.MP4"
            type="video/mp4"
          />
        </video>
         {/* </div> */}
      </>
    );
  }
}
class AboutUs extends Component {
  render() {
    return (
      <>
        <div id="about_us">o Nas</div>
      </>
    );
  }
}
class Gallery extends Component {
  render() {
    return (
      <>
        <div id="gallery">karuzel</div>
      </>
    );
  }
}
class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact">kontact</div>
      </>
    );
  }
}
export default Main;
