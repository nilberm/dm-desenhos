import React from "react";

import "./App.css";
import Menu from "./components/modules/menu/menu";
import ImageBackgroundMobile from "./components/modules/mobileFirst/1-image-background/imageBackground";
import AboutMe from "./components/modules/mobileFirst/2-aboutMe/aboutMe";

function App() {
  return (
    <div>
      <Menu />
      <ImageBackgroundMobile />
      <AboutMe />
    </div>
  );
}

export default App;
