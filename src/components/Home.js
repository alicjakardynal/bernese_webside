import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Media from "react-media";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/DSC01063.JPG";
import img2 from "../assets/DSC01357.JPG";
import img3 from "../assets/IMG_20200724_175606 — kopia.jpg";
import img4 from "../assets/DSC01494.JPG";
import img5 from "../assets/DSC01399.JPG";
import img6 from "../assets/DSC01481.JPG";
import img7 from "../assets/DSC01448.JPG";
import img8 from "../assets/DSC01032.JPG";
import img9 from "../assets/IMG-1443.jpg";
import img10 from "../assets/DSC01044.JPG";
import vid from "../assets/VID_20200719_134749.mp4";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />

        <VideoBanner />
        <AboutUs />
        <Gallery />
        <Contact />
        <Footer />
      </>
    );
  }
}

class Nav extends Component {
  state = {
    hamburgerNav: false
  };
  manageNav = () => {
    this.setState({
      hamburgerNav: this.state.hamburgerNav ? false : true
    });
  };
  render() {
    let displayStyle = {
      display: this.state.hamburgerNav ? "flex" : "none"
    };

    return (
      <>
        <div className="menu">
          <div className="bernese_signature">
            <div></div>
            <h2>BERNEŃSKA WATAHA</h2>
          </div>
          <i class="fas fa-bars" onClick={this.manageNav}></i>
          <Media query="(max-width: 450px)">
            {matches => {
              return matches ? (
                <div className="menu_section " style={displayStyle}>
                  <Link
                    className="nav about_us"
                    to="about_us"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-400}
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
              ) : (
                <div className="menu_section " style={{ display: "flex" }}>
                  <Link
                    className="nav about_us"
                    to="about_us"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-400}
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
              );
            }}
          </Media>
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

        <video autoPlay loop muted>
          <source src={vid} type="video/mp4" />
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
        <div id="about_us">
          <h2>O NAS</h2>
          <p>
            Jesteśmy nową hodowlą i ludźmi, którzy kochają zwierzęta a
            szczególnie tę rasę. Berneńskie psy pasterskie to niezwykle łagodne
            i przyjacielskie pieski, bardzo mądre. Cierpliwe i wyrozumiałe psy
            tej rasy doskonale dogadają się z pociechami w każdym wieku,
            uznawane za jedne z najlepszych psów rodzinnych. Sprawdzają się
            również przy pracy z osobami chorymi, czy niepełnosprawnymi. Rasa
            pochodzi ze Szwajcarii, cechuję się wielkim oddaniem i lojalnością.
            Berneński pies pasterski jest aktywny i energiczny. Wymaga sporo
            ruchu, ale nie jest też wyczynowcem, dlatego od biegu przy rowerze
            lepsza będzie piesza wędrówka. Dorosłemu psu powinno się zapewnić do
            kilku godzin spaceru dziennie.
          </p>
          <p>
            Nasze szczeniaczki żyją w świetnych warunkach otoczone miłością i do
            takich domów także chcielibyśmy je wydać. Odbiór jest możliwy od
            08.08.2020r w miejscowości Busko-Zdrój. Pieski posiadają rodowody i
            chipy oraz są zaszczepione i odrobaczone.
          </p>
        </div>
      </>
    );
  }
}
class Gallery extends Component {
  render() {
    return (
      <>
        <div id="gallery">
          <Carousel showArrows={true} autoPlay>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
            <div>
              <img src={img4} />
            </div>
            <div>
              <img src={img5} />
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img7} />
            </div>
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img9} />
            </div>
            <div>
              <img src={img10} />
            </div>
          </Carousel>
        </div>
      </>
    );
  }
}
class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact">
          <h2>
            Jeżeli jesteś zainteresowany naszymi pieskami zapraszamy do kontaktu
          </h2>
          <p>
            {" "}
            <i class="fas fa-phone-alt"></i> +48 510 180 226
          </p>
          <p> Możliwość zobaczenia piesków w naszej miejscowości Busko-Zdrój</p>
        </div>
      </>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div>
            <i class="fas fa-phone-alt"></i>
            <p>+48 510 180 226</p>
          </div>

          <div>
            <i class="fas fa-envelope-open-text"></i>
            <p>k.alicja66@gmail.com</p>
          </div>
        </div>
      </>
    );
  }
}
export default Main;
