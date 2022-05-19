import React, { useState, useEffect } from "react";

import BTN from "../../../assets/images/menu/button.png";
import logo from "../../../assets/images/logo/logo-square.png";
import "./menu.css";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWith, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <img id="logo" src={logo} alt="logo" />
      {(toggleMenu || screenWith > 500) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Serviços</li>
          <li className="items">Testemunhos</li>
          <li className="items">Contato</li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        <img src={BTN} alt="Botão" />
      </button>
    </nav>
  );
}