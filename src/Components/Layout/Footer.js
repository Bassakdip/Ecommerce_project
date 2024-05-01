import React from "react";
import { FaSpotify } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import "./Footer.css"
//import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div className="footer">
        <h2 className="brand_name">The Generics</h2>
        <div className="icons">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <IoLogoYoutube />
          </a>
          <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaSquareFacebook />
          </a>
      </div>
    </div>
  );
};

export default Footer;