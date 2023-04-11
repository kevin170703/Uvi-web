import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import CardReview from "../CardReview/CardReview";
import style from "./About.module.css";

export default function About({ onAction }) {
  //Animation scroll

  const aboutRef = useRef();
  // const [activateAnimation, setActivateAnimation] = useState(true);

  useEffect(() => {
    const animationScroll = () => {
      const title = aboutRef.current;
      const { y } = title.getBoundingClientRect();
      onAction(y);
    };
    window.addEventListener("scroll", animationScroll);
  }, []);
  //Animation scroll

  return (
    <div className={style.contentAll} id="about" ref={aboutRef}>
      <div className={style.barra}></div>
      <h3>Nosotros</h3>
      <p className={style.description}>
        ¡Consigue el trabajo de tus sueños con nuestra ayuda! Somos una
        plataforma especializada en la corrección y confección de CV y perfil de
        LinkedIn, además de ofrecer consejos personalizados y simulacros de
        entrevistas para mejorar tus habilidades en el proceso de selección. Te
        brindamos una guía completa para la búsqueda de empleo y mucho más.
        ¡Únete a nosotros y maximiza tus oportunidades laborales hoy mismo!
      </p>
      <h4>Algunas recomendaciones de nuestos clientes en linkedin</h4>
      <div className={style.contentReviws}>
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  );
}
