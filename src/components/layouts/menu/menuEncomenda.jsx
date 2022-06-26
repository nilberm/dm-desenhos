import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BTN from "../../../assets/images/menu/button.png";
import logo from "../../../assets/images/logo/logo-square.png";
import wpp from "../../../assets/images/logo/whatsapp.png";
import insta from "../../../assets/images/logo/instagram.png";
import "./menu.css";

export default function MenuEncomenda() {
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

  function Menu() {
    return (
      <ul className="list">
        <li className="items">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="items">
          <a href="#footer">Contato</a>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      <Link to={"/"}>
        <img id="logo" src={logo} alt="logo" />
      </Link>

      {(toggleMenu || screenWith > 780) && <Menu />}
      <div className="social-icons">
        <a href="#about">
          <img src={wpp} alt="whatsapp" />
        </a>
        <a href="#about">
          <img src={insta} alt="instagram" />
        </a>
      </div>

      <button onClick={toggleNav} className="btn">
        <img src={BTN} alt="Botão" />
      </button>
    </nav>
  );
}
