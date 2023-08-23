import React from "react";

import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">
            Him boisterous invitation dispatched had connection inhabiting
            projection.
          </p>
        </div>
        <p className="p__opensans">
          ard an. Diverted as strictly exertion addition no disposal by
          stanhill. This call wife do so sigh no gate felt. You and abode spite
          order get. Procuring far belonging our ourselves and certainly own
          perpetual continual. It elsewhere of sometimes or my certainty. Lain
          no as five or at high. Everything travelling set how law literature.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
