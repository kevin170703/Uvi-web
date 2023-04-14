import React from "react";
import style from "./CardPlan.module.css";
import { Link } from "react-scroll";

export default function CardPlans({ popular, price, title }) {
  return (
    <div className={popular ? style.contentAllPopular : style.contentAll}>
      <div className={popular ? style.priceTitlePopular : style.priceTitle}>
        <h6>{title}</h6>

        <p className={popular ? style.pricePopular : style.price}>
          {price}
          <span>/mes</span>
        </p>
      </div>
      <ul>
        <li>Caracteristica</li>
        <li>Caracteristica</li>
        <li>Caracteristica</li>
        <li>Caracteristica</li>
      </ul>
      <Link
        activeClass="active"
        to="contact-us"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={style.ButtonGo}
      >
        Empezar
      </Link>
    </div>
  );
}
