import React from "react";
import CardPlan from "../CardPlans/CardPlan";
import style from "./Plans.module.css";
export default function Plans() {
  return (
    <div className={style.contentAll} id="plans">
      <div className={style.barra}></div>
      <h3>Planes</h3>
      <p className={style.subtitle}>Elige tu plan favorito</p>
      <div className={style.contentCardPlans}>
        <CardPlan />
        <CardPlan popular={true} />
        <CardPlan />
      </div>
    </div>
  );
}
