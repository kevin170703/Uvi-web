import React from "react";
import style from "./Home.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo2.png";
import backgroundHome from "../../assets/background-home.png";
import backgroundHomeMovile from "../../assets/backgroud-home-mobile.png";
import backgroundVideo from "../../assets/video-home.mp4";

export default function Home() {
  return (
    <div className={style.contentAll} id="home">
      <img
        src={window.innerWidth < 700 ? backgroundHomeMovile : backgroundHome}
        alt=""
        className={style.background}
      />

      <video autoPlay muted loop className={style.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className={style.contentInfo}>
        {/* <img src={logo} alt="" className={style.title} /> */}
        <h6>
          Potencia tu carrera profesional con nuestros servicios de
          asesoramiento y herramientas de búsqueda de empleo
        </h6>
        <div className={style.contentButtons}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={style.buttonServices}
          >
            Servicios
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={style.buttonAbout}
          >
            Nosotros
          </Link>
        </div>
      </div>
      {/* <img src={fondo} alt="" className={style.fondo} /> */}
    </div>
  );
}
