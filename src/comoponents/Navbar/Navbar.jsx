import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo1.png";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar({ dataAboutPosition }) {
  const [vistPhone, setVistPhone] = useState(false);
  return (
    <div
      className={
        dataAboutPosition < 100 ? style.contentAllColor : style.contentAll
      }
      style={vistPhone ? { height: "100vh" } : {}}
    >
      <FiMenu
        size="30"
        className={vistPhone ? style.buttonMenuNone : style.buttonMenu}
        onClick={() => setVistPhone(true)}
      />
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={style.links}
      >
        <img src={logo} alt="" />
      </Link>

      <div className={vistPhone ? style.contentLinksPhone : style.contentLinks}>
        <IoClose
          size="30"
          className={
            vistPhone ? style.buttonCloseMenu : style.buttonCloseMenuNone
          }
          onClick={() => setVistPhone(false)}
        />
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={20}
          duration={500}
          className={style.links}
          style={
            dataAboutPosition < 100 ? { color: "#000" } : { color: "#fff" }
          }
        >
          Sobre nosotros
        </Link>

        <Link
          activeClass="active"
          to="plans"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={style.links}
          style={
            dataAboutPosition < 100 ? { color: "#000" } : { color: "#fff" }
          }
        >
          Planes
        </Link>
        <Link
          activeClass="active"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={style.links}
          style={
            dataAboutPosition < 100 ? { color: "#000" } : { color: "#fff" }
          }
        >
          Contactanos
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={style.links}
          style={
            dataAboutPosition < 100 ? { color: "#000" } : { color: "#fff" }
          }
        >
          Contactos
        </Link>
      </div>
    </div>
  );
}
