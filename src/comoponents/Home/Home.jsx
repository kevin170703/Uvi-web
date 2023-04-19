import React from "react";
import style from "./Home.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo2.png";
import fondo from "../../assets/imageHome.svg";

export default function Home() {
  return (
    <div className={style.contentAll} id="home">
      <div className={style.contentInfo}>
        {/* <h1>Uv!</h1> */}
        <img src={logo} alt="" className={style.title} />
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
      <img src={fondo} alt="" className={style.fondo} />
    </div>
  );
}
