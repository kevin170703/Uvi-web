import React from "react";
import { useState } from "react";
import CardPlan from "../CardPlans/CardPlan";
import style from "./Plans.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Plans() {
  const [card, setCard] = useState(0);

  let plans = [
    <CardPlan
      price={"$ARS: 1600"}
      title="Revisión o creación de  Linkedin"
      key={1}
      characteristics={
        "Una devolución por escrito de cómo se encuentra su perfil de linkedin. Un análisis general con feedback, dándote tips y consejos de lo que se puede mejorar. Creación de perfil de linkedin desde cero, en el caso de no tener aún una cuenta. Guía de consejos generales de búsqueda de empleo."
      }
      deliveryTime={
        "Este servicio se realizará dentro de los 3 días hábiles posteriores a la compra."
      }
    />,
    <CardPlan
      popular={true}
      price={"$ARS: 2500"}
      title="Asesorías para entrevistas (personalizadas)"
      key={2}
      characteristics={
        "incluye un resumen de los puntos centrales hablados en la asesoría y consejos para las entrevistas. Ideal para aquellas personas que no logran superar con éxito la etapa de la entrevista para un puesto de trabajo."
      }
      deliveryTime={
        "La asesoría queda sujeta a fechas disponibles una vez realizado el pago de la misma."
      }
    />,
    <CardPlan
      price={"$ARS: 2000"}
      title=" Corrección o Confección de CV"
      key={3}
      characteristics={
        "Diseño de tu currículum pensado desde un perfil específico adaptado a esa posición. Incluye Carta de Presentación y correo de solicitud de trabajo. Se entrega un PDF para impresión. Y un link donde te aparecerá la plantilla de tu CV para que puedas editarlo la veces que necesites.Guía de consejos generales de búsqueda de empleo. En caso de solicitar este servicio de manera urgente, se abonará un adicional en función del pedido. Ideal para aquellas personas que tienen dudas sobre cómo está elaborado su currículum."
      }
      deliveryTime={
        "Este servicio se realizará dentro de los 6 días hábiles posteriores a la compra."
      }
    />,
  ];

  function changuePlanLeft() {
    const lengthPlans = plans.length;
    setCard(card === 0 ? lengthPlans - 1 : card - 1);
  }

  function changuePlanRight() {
    const lengthPlans = plans.length;
    setCard(card === lengthPlans - 1 ? 0 : card + 1);
  }

  return (
    <div className={style.contentAll} id="plans">
      <div className={style.barra}></div>
      <h3>Servicios</h3>
      <p className={style.subtitle}>Elige tu plan favorito</p>
      {window.innerWidth < 700 ? (
        <div className={style.contentCardPlansMobile}>
          <IoIosArrowBack
            size="80"
            className={style.arrow}
            onClick={() => changuePlanLeft()}
          />
          {plans[card]}
          <IoIosArrowForward
            size="80"
            className={style.arrow}
            onClick={() => changuePlanRight()}
          />
        </div>
      ) : (
        <div className={style.contentCardPlans}>
          {plans.map((element) => element)}
        </div>
      )}
    </div>
  );
}
