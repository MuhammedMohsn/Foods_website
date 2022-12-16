import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row first-footer">
          <div className="col-md-3">
            <img src={logo} alt="logo" className="mw-100" />
            <p>
              <span className="fw-bold">Address:</span> 5171 W Campbell Ave
              undefined Kent, Utah 53127 United State
            </p>
            <p>
              <span className="fw-bold">Call Us:</span>(+91) - 540-025-124553
            </p>
            <p>
              <span className="fw-bold">Email:</span>sale@Foodera.com
            </p>
          </div>
          <div className="col-md-3">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Mobile App</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="/">Terms & Conditionss</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">DMCA</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Info</h2>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>

              <li>
                <a href="/">Support Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12 mt-4 text-center second-footer">
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a href="/">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <BsWhatsapp />
              </a>
            </li>
            <li>
              <a href="/">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <BsYoutube />
              </a>
            </li>
          </ul>

          <p className="copyright fw-bold">
            &copy; 2022,<span>Foodera</span> All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;