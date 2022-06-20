import React from "react";

import "./App.css";
import Menu from "./components/modules/menu/menu";
import ImageBackgroundMobile from "./components/modules/mobileFirst/1-image-background/imageBackground";
import AboutMe from "./components/modules/mobileFirst/2-aboutMe/aboutMe";
import Services from "./components/modules/mobileFirst/3-services/services";
import Footer from "./components/modules/mobileFirst/5-footer/footer";

function App() {
  return (
    <div>
      <Menu />
      <ImageBackgroundMobile />
      <AboutMe />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
