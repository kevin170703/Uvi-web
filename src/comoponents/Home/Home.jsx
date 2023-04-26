import React from "react";
import style from "./Home.module.css";
import { Link } from "react-scroll";
import backgroundHome from "../../assets/background-home.png";
import backgroundHomeMovile from "../../assets/backgroud-home-mobile.png";
import backgroundHomeMid from "../../assets/background-home-mid.png";
import backgroundHomeMovileLow from "../../assets/background-movil-low.png";
import backgroundVideo from "../../assets/video-home.mp4";

import cardCV from "../../assets/cardCV.png";
import cardLinkedin from "../../assets/cardLinkedin.png";
import cardInterview from "../../assets/cardInterview.png";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={style.contentAll} id="home">
      {innerWidth > 1200 ? (
        <img src={backgroundHome} alt="" className={style.background} />
      ) : null}

      {innerWidth <= 1200 && innerWidth > 700 ? (
        <img src={backgroundHomeMid} alt="" className={style.background} />
      ) : null}

      {innerWidth <= 700 && innerWidth > 400 ? (
        <img src={backgroundHomeMovile} alt="" className={style.background} />
      ) : null}

      {innerWidth <= 400 ? (
        <img
          src={backgroundHomeMovileLow}
          alt=""
          className={style.background}
        />
      ) : null}
      {innerWidth > 700 ? (
        <div className={style.contentSlider}>
          <motion.div
            className={style.contentImages}
            initial={{ x: "100%" }}
            animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
            transition={{
              delay: 2,
              duration: 5,
              repeatType: "reverse",
              repeat: Infinity,
              repeatDelay: 12,
            }}
          >
            <img src={cardCV} alt="" />
          </motion.div>
          <motion.div
            className={style.contentImages}
            initial={{ x: "100%" }}
            animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
            transition={{
              delay: 7,
              duration: 5,
              repeatType: "reverse",
              repeat: Infinity,
              repeatDelay: 12,
            }}
          >
            <img src={cardLinkedin} alt="" />
          </motion.div>
          <motion.div
            className={style.contentImages}
            initial={{ x: "100%" }}
            animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
            transition={{
              delay: 12,
              duration: 5,
              repeatType: "reverse",
              repeat: Infinity,
              repeatDelay: 12,
            }}
          >
            <img src={cardInterview} alt="" />
          </motion.div>
        </div>
      ) : null}

      <div className={style.backgroundVideo}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <div className={style.contentInfo}>
        <h6>
          Potencia tu búsqueda laboral con nuestros servicios de asesoramiento y
          herramientas de búsqueda de empleo
        </h6>
        <div className={style.contentButtons}>
          <Link
            activeClass="active"
            to="services"
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
    </div>
  );
}
