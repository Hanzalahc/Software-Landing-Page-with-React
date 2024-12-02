import React from "react";
import { Link } from "react-router-dom";
import { OnTopButton, Loader, Header, Footer } from "../../components";

function Home() {
  return (
    <main>
      {/* <!-- LOADER --> */}
      <Loader></Loader>
      {/* <!-- END LOADER --> */}

      {/* <!-- START HEADER --> */}
      <Header></Header>
      {/* <!-- START HEADER --> */}

      {/* <!-- START SECTION BANNER --> */}
      <section
        id="home_section"
        className="banner_section light_gray_bg2 wave_shape_bottom overflow_hide"
      >
        <div className="container-fluid">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row">
            <div className="col-12">
              <div className="medium_divider clearfix"></div>
              <div className="large_divider d-md-none clearfix"></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="animation mb-4 mb-md-0"
                data-animation="fadeInRight"
                data-animation-delay="1.3s"
              >
                <img className="w-100" src="../images/banner_vector.png" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-6 order-md-first">
              <div
                className="banner_content2 animation"
                data-animation="fadeIn"
                data-animation-delay="0.8s"
              >
                <h1
                  className="animation"
                  data-animation="fadeInLeft"
                  data-animation-delay="1s"
                >
                  Every Business Problem has a Software Solution
                </h1>
                <p
                  className="animation mt-md-4 mt-2 mb-4"
                  data-animation="fadeInLeft"
                  data-animation-delay="1.3s"
                >
                  Anger Software Tech designed and develop world class products
                  that provides you the results that you always wanted
                </p>
                <Link
                  to="#"
                  className="btn btn-default btn_box_shadow animation"
                  data-animation="fadeInLeft"
                  data-animation-delay="1.6s"
                >
                  Get Started
                </Link>
                <Link
                  to="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
                  className="btn btn-outline-success btn-md btn_box_shadow video_popup animation"
                  data-animation="fadeInLeft"
                  data-animation-delay="1.6s"
                >
                  Let's Start<i className="ion-ios-arrow-thin-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </section>
      {/* <!-- END SECTION BANNER --> */}

      {/* <!-- START SECTION ABOUT --> */}
      <section id="download" className="small_pt small_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9 text-center">
              <div
                className="heading_s3 mb-md-3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">
                  Let's Get Started Now For Software Solution
                </h2>
              </div>
              <p
                className="animation mb-md-4"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
              <div className="btn_group">
                <Link
                  to="#"
                  className="btn btn-success btn-md btn_box_shadow animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  Download Now
                </Link>
                <Link
                  to="#"
                  className="btn btn-default btn_box_shadow animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  30 Day Free Trail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION ABOUT --> */}

      {/* <!-- START SECTION SERVICES --> */}
      <section id="services" className="light_gray_bg2 wave_shape_top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="large_divider clearfix"></div>
              <div className="small_divider clearfix"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div
                className="heading_s3 mb-md-3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">
                  Our Fetures Services Offered
                </h2>
              </div>
              <p
                className="text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon1.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Content Management</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.7s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon2.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Project Analysis</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon3.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Free Updates</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.9s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon4.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Support & Service</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon5.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Easy Customizable</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="icon_box icon_box_style_11 box_shadow3 radius_box_10 bg-white animation"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <div className="box_icon mb-3">
                  <img src="../images/icon6.png" />
                </div>
                <div className="icon_box_content">
                  <h5>Secure Data</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION SERVICES --> */}

      {/* <!-- START ABOUT US --> */}
      <section
        id="features"
        className="parallax_bg overflow_hide"
        data-parallax-bg-image="demo-software/images/shape_img1.png"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="mb-4 mb-lg-0 animation dashboard_img"
                data-animation="fadeInLeft"
                data-animation-delay="0.1s"
              >
                <img src="../images/dashboard1.png" alt="vector1" />
              </div>
            </div>
            <div
              className="col-lg-5 ml-lg-4 col-md-6 col-sm-12 animation"
              data-animation="fadeInRight"
              data-animation-delay="0.1s"
            >
              <div className="heading_s3 mb-md-3">
                <h2 className="font-weight-normal">
                  Your Business Resources We Have Make Faster.
                </h2>
              </div>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary
              </p>
              <div className="list_style_4 color_blue mb-3">
                <ul>
                  <li>Deep Customization Process</li>
                  <li>Technologies And Innovations consultant</li>
                  <li>Secured Transactions consultant</li>
                  <li>Unique Sales Methodoligies</li>
                </ul>
              </div>
              <Link to="#" className="btn btn-default">
                Read More <i className="ion-ios-arrow-thin-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="large_divider clearfix"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="heading_s3 mb-md-3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">
                  Easy To Maintain Your Business.
                </h2>
              </div>
              <p
                className="text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="tab-style7 mt-3">
                <ul
                  className="nav nav-tabs justify-content-between animation"
                  role="tablist"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-toggle="tab"
                      to="#tab1"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      <i className="ti-desktop"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#tab2"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <i className="ti-layers-alt"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#tab3"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      <i className="ti-eye"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#tab4"
                      role="tab"
                      aria-controls="tab4"
                      aria-selected="false"
                    >
                      <i className="ti-settings"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="medium_divider clearfix mb-3 mb-md-0"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  <div className="row align-items-center">
                    <div
                      className="col-md-5 mb-4 mb-md-0 animation"
                      data-animation="fadeInLeft"
                      data-animation-delay="0.3s"
                    >
                      <div className="description">
                        <div className="mb-md-3">
                          <h3>Responsive Layout</h3>
                        </div>
                        <p>
                          Suspendisse potenti. Nullam pharetra sed felis non
                          sodales. Nam eleifend, arcu sed imperdiet euismod,
                          augue eros consequat tortor, ut convallis eros. Aenean
                          a ipsum vel eros elementum efficitur.
                        </p>
                        <Link className="btn btn-outline-black" to="#">
                          Read More <i className="ion-ios-arrow-thin-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-md-7 animation"
                      data-animation="fadeInRight"
                      data-animation-delay="0.4s"
                    >
                      <img src="../images/vector1.png" alt="vector" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <div className="row align-items-center">
                    <div
                      className="col-md-5 mb-4 mb-md-0 animation"
                      data-animation="fadeInLeft"
                      data-animation-delay="0.3s"
                    >
                      <div className="description">
                        <div className="mb-md-3">
                          <h3>Responsive Layout</h3>
                        </div>
                        <p>
                          Suspendisse potenti. Nullam pharetra sed felis non
                          sodales. Nam eleifend, arcu sed imperdiet euismod,
                          augue eros consequat tortor, ut convallis eros. Aenean
                          a ipsum vel eros elementum efficitur.
                        </p>
                        <Link className="btn btn-outline-black" to="#">
                          Read More <i className="ion-ios-arrow-thin-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-md-7 animation"
                      data-animation="fadeInRight"
                      data-animation-delay="0.4s"
                    >
                      <img src="../images/vector2.png" alt="vector" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab3" role="tabpanel">
                  <div className="row align-items-center">
                    <div
                      className="col-md-5 mb-4 mb-md-0 animation"
                      data-animation="fadeInLeft"
                      data-animation-delay="0.3s"
                    >
                      <div className="description">
                        <div className="mb-md-3">
                          <h3>Responsive Layout</h3>
                        </div>
                        <p>
                          Suspendisse potenti. Nullam pharetra sed felis non
                          sodales. Nam eleifend, arcu sed imperdiet euismod,
                          augue eros consequat tortor, ut convallis eros. Aenean
                          a ipsum vel eros elementum efficitur.
                        </p>
                        <Link className="btn btn-outline-black" to="#">
                          Read More <i className="ion-ios-arrow-thin-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-md-7 animation"
                      data-animation="fadeInRight"
                      data-animation-delay="0.4s"
                    >
                      <img src="../images/vector1.png" alt="vector" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab4" role="tabpanel">
                  <div className="row align-items-center">
                    <div
                      className="col-md-5 mb-4 mb-md-0 animation"
                      data-animation="fadeInLeft"
                      data-animation-delay="0.3s"
                    >
                      <div className="description">
                        <div className="mb-md-3">
                          <h3>Responsive Layout</h3>
                        </div>
                        <p>
                          Suspendisse potenti. Nullam pharetra sed felis non
                          sodales. Nam eleifend, arcu sed imperdiet euismod,
                          augue eros consequat tortor, ut convallis eros. Aenean
                          a ipsum vel eros elementum efficitur.
                        </p>
                        <Link className="btn btn-outline-black" to="#">
                          Read More <i className="ion-ios-arrow-thin-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-md-7 animation"
                      data-animation="fadeInRight"
                      data-animation-delay="0.4s"
                    >
                      <img src="../images/vector2.png" alt="vector" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END ABOUT US --> */}

      {/* <!-- START PRICING TABLE --> */}
      <section id="pricing" className="light_gray_bg2 small_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div
                className="heading_s3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">Choose Our Pricing Plan</h2>
              </div>
              <p
                className="text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-style8 pt-2 text-center">
                <ul
                  className="nav nav-tabs sliding_tab animation"
                  role="tablist"
                  data-animation="fadeInUp"
                  data-animation-delay="0.3s"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active show"
                      data-toggle="tab"
                      to="#Monthly"
                      role="tab"
                      aria-controls="Monthly"
                      aria-selected="true"
                    >
                      Monthly
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-toggle="tab"
                      to="#Yearly"
                      role="tab"
                      aria-controls="Yearly"
                      aria-selected="false"
                    >
                      Yearly
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="clearfix medium_divider"></div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="Monthly"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.2s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Basic</h4>
                          <div className="price_tage">
                            <h2>$100</h2>
                            <span>Per Month</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Basic Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link to="#" className="btn btn-default btn-radius">
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.3s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Standard</h4>
                          <div className="price_tage">
                            <h2>$500</h2>
                            <span>Per Month</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Standard Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link
                            to="#"
                            className="btn btn-default btn-md btn-radius"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.4s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Unlimited</h4>
                          <div className="price_tage">
                            <h2>$1000</h2>
                            <span>Per Month</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Unlimited Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link
                            to="#"
                            className="btn btn-default btn-md btn-radius"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Yearly" role="tabpanel">
                  <div className="row">
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.2s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Basic</h4>
                          <div className="price_tage">
                            <h2>$500</h2>
                            <span>Per Year</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Basic Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link to="#" className="btn btn-default btn-radius">
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.3s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Standard</h4>
                          <div className="price_tage">
                            <h2>$1000</h2>
                            <span>Per Year</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Standard Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link
                            to="#"
                            className="btn btn-default btn-md btn-radius"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-5 mb-4">
                      <div
                        className="pricing_box pricing_style2 animation"
                        data-animation="flipInY"
                        data-animation-delay="0.4s"
                      >
                        <div className="pr_title border-bottom bg-white">
                          <h4>Unlimited</h4>
                          <div className="price_tage">
                            <h2>$5000</h2>
                            <span>Per Year</span>
                          </div>
                        </div>
                        <div className="pr_content pt-3">
                          <ul className="list_none pr_list">
                            <li>Unlimited Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                            <li>Unlimited Services</li>
                          </ul>
                        </div>
                        <div className="pr_footer">
                          <Link
                            to="#"
                            className="btn btn-default btn-md btn-radius"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- START PRICING TABLE --> */}

      {/* <!-- START SECTION TESTIMONIAL --> */}
      <section className="small_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div
                className="heading_s3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">Our Client Says</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="testimonial_slider testimonial_style4 carousel_slide2 owl-carousel owl-theme animation"
                data-margin="10"
                data-loop="true"
                data-autoplay="true"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="item">
                  <div className="testimonial_box box_shadow3 radius_box_10 bg-white">
                    <div className="testimonial_img">
                      <img
                        className="rounded-circle m-auto"
                        src="assets/images/user1.jpg"
                        alt="user"
                      />
                    </div>
                    <div className="testi_meta">
                      <h6>Lissa Castro</h6>
                      <span>Co-Founder</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box box_shadow3 radius_box_10 bg-white">
                    <div className="testimonial_img">
                      <img
                        className="rounded-circle m-auto"
                        src="assets/images/user2.jpg"
                        alt="user"
                      />
                    </div>
                    <div className="testi_meta">
                      <h6>Alden Smith</h6>
                      <span>Creative Designer</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box box_shadow3 radius_box_10 bg-white">
                    <div className="testimonial_img">
                      <img
                        className="rounded-circle m-auto"
                        src="assets/images/user3.jpg"
                        alt="user"
                      />
                    </div>
                    <div className="testi_meta">
                      <h6>Daisy Lana</h6>
                      <span>Creative Director</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box box_shadow3 radius_box_10 bg-white">
                    <div className="testimonial_img">
                      <img
                        className="rounded-circle m-auto"
                        src="assets/images/user4.jpg"
                        alt="user"
                      />
                    </div>
                    <div className="testi_meta">
                      <h6>Alfred Amos</h6>
                      <span>Creative Director</span>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION TESTIMONIAL --> */}

      {/* <!-- START SECTION BLOG --> */}
      <section id="blog" className="small_pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="heading_s3 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <h2 className="font-weight-normal">Our Letest News</h2>
              </div>
            </div>
          </div>
          <div className="row blog_wrap justify-content-center">
            <div className="col-lg-4 col-md-6 mb-md-4 mb-2 pb-2">
              <div
                className="blog_post blog_style4 box_shadow4 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="blog_img">
                  <Link to="#">
                    <img
                      src="../images/blog_small_img1.jpg"
                      alt="blog_small_img1"
                    />
                  </Link>
                </div>
                <div className="blog_content bg-white">
                  <div className="blog_text">
                    <h6 className="blog_title">
                      <Link to="#">
                        Why are tickets to fly to Lagos expensive?
                      </Link>
                    </h6>
                    <ul className="list_none blog_meta">
                      <li>
                        <Link to="#">
                          <i className="ion-calendar"></i> April 14, 2018
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-chatboxes"></i> 2 Comment
                        </Link>
                      </li>
                    </ul>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text
                    </p>
                    <Link to="#" className="text-capitalize">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-4 mb-2 pb-2">
              <div
                className="blog_post blog_style4 box_shadow4 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                <div className="blog_img">
                  <Link to="#">
                    <img
                      src="../images/blog_small_img2.jpg"
                      alt="blog_small_img2"
                    />
                  </Link>
                </div>
                <div className="blog_content bg-white">
                  <div className="blog_text">
                    <h6 className="blog_title">
                      <Link to="#">
                        A cheap and flexible solution for those who want a
                        starter package
                      </Link>
                    </h6>
                    <ul className="list_none blog_meta">
                      <li>
                        <Link to="#">
                          <i className="ion-calendar"></i> April 14, 2018
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-chatboxes"></i> 2 Comment
                        </Link>
                      </li>
                    </ul>
                    <p>
                      Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet.
                    </p>
                    <Link to="#" className="text-capitalize">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-4 mb-2 pb-2">
              <div
                className="blog_post blog_style4 box_shadow4 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="blog_img">
                  <Link to="#">
                    <img
                      src="../images/blog_small_img3.jpg"
                      alt="blog_small_img3"
                    />
                  </Link>
                </div>
                <div className="blog_content bg-white">
                  <div className="blog_text">
                    <h6 className="blog_title">
                      <Link to="#">
                        But I must explain to you how all this mistaken idea of
                        denouncing
                      </Link>
                    </h6>
                    <ul className="list_none blog_meta">
                      <li>
                        <Link to="#">
                          <i className="ion-calendar"></i> April 14, 2018
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ion-chatboxes"></i> 2 Comment
                        </Link>
                      </li>
                    </ul>
                    <p>
                      It uses a dictionary of over combined with a handful of
                      model sentence structures, to generate Lorem Ipsum which
                      looks reasonable
                    </p>
                    <Link to="#" className="text-capitalize">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION BLOG --> */}

      {/* <!-- START SECTION NEWSLETTER --> */}
      <section className="pt-0 small_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div
                className="cta_section_small radius_box_10 box_shadow4 wave_shape_top3 light_gray_bg animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <h2 className="font-weight-normal mb-3">
                      Subscribe Our Newsletter
                    </h2>
                    <p>
                      Contrary to popular belief of lorem Ipsm Latin amet ltin
                      from consectetur industry. Phasellus blandit massa enim.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="newsletter_form mt-md-3">
                      <form>
                        <div className="radius_input input_border2">
                          <input
                            type="text"
                            required=""
                            placeholder="Enter Email Address"
                          />
                        </div>
                        <button
                          type="submit"
                          title="Subscribe"
                          className="btn btn-default"
                          name="submit"
                          value="Submit"
                        >
                          subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END SECTION NEWSLETTER --> */}

      <Footer></Footer>
      <OnTopButton></OnTopButton>
    </main>
  );
}

export default Home;
