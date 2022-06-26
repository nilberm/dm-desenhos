import React from "react";

import Menu from "../../layouts/menu/menu";
import ImageBackgroundMobile from "../Home/1-image-background/imageBackground";
import AboutMe from "../Home/2-aboutMe/aboutMe";
import Services from "../Home/3-services/services";

const Home = () => {
  return (
    <div>
      <Menu />
      <ImageBackgroundMobile />
      <AboutMe />
      <Services />
    </div>
  );
};

export default Home;
