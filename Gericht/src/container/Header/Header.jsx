import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Attention he extremity unwilling on otherwise. Conviction up partiality
        as delightful is discovered. Yet jennings resolved disposed exertion you
        off. Left did fond drew fat head poor. So if he into shot half many
        long. China fully him every fat was world grave.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
