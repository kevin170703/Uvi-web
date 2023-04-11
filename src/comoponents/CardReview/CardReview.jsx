import React from "react";
import style from "./CardReview.module.css";
import avatar from "../../assets/avatar.png";
export default function CardReview() {
  return (
    <div className={style.contentAll}>
      <div className={style.contetInfoUser}>
        <img src={avatar} alt="" />
        <h6>Kevin Correa</h6>
      </div>
      <p className={style.reviewText}>
        Muy buen servicio, me ayudo a conseguir mi primer trabajo luego de la
        revision de mi CV.
      </p>
    </div>
  );
}
