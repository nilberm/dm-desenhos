import React from "react";
import MenuEncomenda from "../../layouts/menu/menuEncomenda";
import TitleItem from "./components/titleItem";
import ImageItem from "./components/imageItem";
import ImageRealistic from "../../../assets/images/services/realistic.png";
import Forms from "./components/forms";
import "./services.css";

const Realistic = () => {
  return (
    <div>
      <MenuEncomenda />
      <TitleItem name="Desenho Realista" />
      <ImageItem source={ImageRealistic} alt="Desenho realista" />
      <Forms />
    </div>
  );
};

export default Realistic;
