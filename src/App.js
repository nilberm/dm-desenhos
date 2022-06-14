import React from "react";

import "./App.css";
import Menu from "./components/modules/menu/menu";
import ImageBackgroundMobile from "./components/modules/mobileFirst/1-image-background/imageBackground";
import AboutMe from "./components/modules/mobileFirst/2-aboutMe/aboutMe";
import Services from "./components/modules/mobileFirst/3-services/services";

function App() {
  return (
    <div>
      <Menu />
      <ImageBackgroundMobile />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
