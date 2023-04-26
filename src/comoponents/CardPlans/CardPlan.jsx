import React from "react";
import style from "./CardPlan.module.css";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CardPlans({
  popular,
  price,
  title,
  characteristics,
  deliveryTime,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const arrayCharacteristics = characteristics.split(". ");

  return (
    <motion.div
      className={popular ? style.contentAllPopular : style.contentAll}
      data-isOpen={isOpen}
    >
      <div className={popular ? style.priceTitlePopular : style.priceTitle}>
        <h6>{title}</h6>
      </div>
      <div className={style.contentButtons}>
        <button
          className={style.buttonViewMore}
          onClick={() => setIsOpen(!isOpen)}
        >
          Ver más
        </button>
        <button className={style.buttonBuy}>Adquirir</button>
      </div>
      <div>
        <p className={popular ? style.pricePopular : style.price}>{price}</p>
        <p className={style.descriiption}>
          Confección y corrección de tu Currículum por parte de nuestros
          expertos de RRHH con el fin de que destaques entre los demás y
          enfocarlo al rubro donde busques empleo.
        </p>
        <h5>Incluye: </h5>
        <ul>
          {arrayCharacteristics.map((character) => (
            <li>{character}</li>
          ))}
        </ul>
        {/* <p className={style.dataExtra}>
          En caso de solicitar este servicio de manera urgente, se abonará un
          adicional en función del pedido. <br />
          Ideal para aquellas personas que tienen dudas sobre cómo está
          elaborado su currículum.
        </p> */}
        <h5>Tiempo de entrega: </h5>
        <p>{deliveryTime}</p>
      </div>
    </motion.div>
  );
}
