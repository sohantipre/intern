import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items ">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
  </div> */}

          <div className="footer-link-items">
            <h2>Social Media</h2>

            <a href="https://www.instagram.com/?hl=en">Instagram</a>
            <a href="https://www.instagram.com/?hl=en">Facebook</a>
            <a href="https://www.instagram.com/?hl=en">LinkedIn</a>
            <a href="https://www.instagram.com/?hl=en">Twitter</a>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <FaReact className="navbar-icon" />
              REACT
            </Link>
          </div>
          <small className="website-rights">React © {fullYear}</small>

          <div className="social-icons">
            <a
              // style={{ color: "white" }}
              className="social-icon-link whats-app"
              href="https://wa.me/+919307937688?text=I%20Came%20Here%20From%20Your%20Website"
            >
              <FaWhatsapp />
            </a>

            {/* <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            > */}
            <a
              href="https://www.facebook.com/"
              className="facebook social-icon-link"
            >
              <FaFacebook />
            </a>
            {/* </Link> */}
            {/* <Link
              className="social-icon-link insta"
              to="/"
              target="_blank"
              aria-label="Instagram"
            > */}
            <a
              href="https://www.instagram.com/?hl=en"
              className="insta social-icon-link"
            >
              <FaInstagram />
            </a>
            {/* </Link> */}
            {/* <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            > */}
            <a
              href="https://www.twitter.com/"
              className="twitter social-icon-link"
            >
              <FaTwitter />
            </a>
            {/* </Link> */}
            {/* <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn" */}

            <a
              href="https://www.linkedin.com/"
              className="linkedin social-icon-link"
            >
              <FaLinkedin />
            </a>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
