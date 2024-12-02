import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg_black3 wave_shape_top2 footer_dark">
      <div className="top_footer small_pb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="large_divider"></div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="footer_logo">
                <Link className="page-scroll" to="#home_section">
                  <img alt="logo" src="../images/software-logo_white.png" />
                </Link>
              </div>
              <p>
                Phasellus blandit massa enim. elit id varius nunc. Lorems ipsum
                dolor sit amet, consectetur industry.
              </p>
              <ul className="list_none footer_social">
                <li>
                  <Link to="#">
                    <i className="ion-social-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ion-social-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ion-social-googleplus"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ion-social-youtube-outline"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ion-social-instagram-outline"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-2 col-sm-4 col-6 mt-4 mt-lg-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.3s"
            >
              <h6 className="widget_title">Services</h6>
              <ul className="list_none widget_links_style2">
                <li>
                  <Link to="#">Web Devlopment</Link>
                </li>
                <li>
                  <Link to="#">E-commerce Solution</Link>
                </li>
                <li>
                  <Link to="#">Business Solution</Link>
                </li>
                <li>
                  <Link to="#">Online Marketing</Link>
                </li>
                <li>
                  <Link to="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-2 col-sm-3 col-6 mt-4 mt-lg-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.4s"
            >
              <h6 className="widget_title">USEFUL LINKS</h6>
              <ul className="list_none widget_links_style2">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Features</Link>
                </li>
                <li>
                  <Link to="#">Feedback</Link>
                </li>
                <li>
                  <Link to="#">Support center</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-4 col-sm-5 mt-4 mt-lg-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.5s"
            >
              <h6 className="widget_title">Contact</h6>
              <ul className="contact_info contact_info_light list_none mb-4">
                <li>
                  <span className="ti-location-pin"></span>
                  <address>12 Street, Old Trafford, NewYork</address>
                </li>
                <li>
                  <span className="ti-email"></span>
                  <Link to="mailto:info@sitename.com">info@sitename.com</Link>
                </li>
                <li>
                  <span className="ti-mobile"></span>
                  <p>+ 457 789 789 65</p>
                </li>
                <li>
                  <span className="ti-time"></span>
                  <p>Monday - Friday 10pm - 9am</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="bottom_footer border_top_tran">
              <div className="row">
                <div className="col-md-6">
                  <p className="copyright m-md-0 text-center text-md-left">
                    © 2018 All Rights Reserved by Anger.
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="list_none footer_link text-center text-md-right">
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
