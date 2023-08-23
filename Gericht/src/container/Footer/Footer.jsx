import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">The him father parish looked </p>
          <p className="p__opensans">+54865113218 </p>
          <p className="p__opensans">+54665443515 </p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="Footer Logo" />
          <p className="p__opensans">
            The best way to find yourself is to lose yourself in the service of
            others
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            alt="Spoon"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">The him father parish looked </p>
          <p className="p__opensans">Mon-Fri 10am </p>
          <p className="p__opensans">Sat-Sun 11am </p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht</p>
      </div>
    </div>
  );
};

export default Footer;
