import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header_wrap fixed-top dark_skin hover_menu_style3 main_menu_capitalize main_menu_size_16 main_menu_weight_400 transparent-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand m-auto page-scroll" to="#home_section">
            <img
              className="logo_light"
              src="../images/software-logo_white.png"
              alt="logo"
            />
            <img
              className="logo_dark"
              src="../images/software-logo_dark.png"
              alt="logo"
            />
            <img
              className="logo_default"
              src="../images/software-logo_dark.png"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ion-android-menu"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li>
                <Link
                  className="nav-link active page-scroll"
                  to="#home_section"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="#download">
                  Download
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="#features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="#pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="#blog">
                  blog
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav attr-nav align-items-center nav_lr_btn">
            <li>
              <Link to="#" className="btn nav-links">
                Login
              </Link>
            </li>
            <li>
              <Link to="#" className="btn btn-default">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
