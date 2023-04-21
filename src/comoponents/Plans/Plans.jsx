import React from "react";
import { useState } from "react";
import CardPlan from "../CardPlans/CardPlan";
import style from "./Plans.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Plans() {
  const [card, setCard] = useState(0);
  let plans = [
    <CardPlan price={"30"} title="Title1" key={1} />,
    <CardPlan popular={true} price={"50"} title="Title2" key={2} />,
    <CardPlan price={"10"} title="Title3" key={3} />,
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
      <h3>Planes</h3>
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
