import React from "react";
import style from "./Form.module.css";
import logo from "../../assets/logo1.png";
export default function Form() {
  return (
    <div className={style.contentAll} id="contact-us">
      <div className={style.contentForm}>
        <form action="">
          <div className={style.contentTitle}>
            {/* <div className={style.barra}></div> */}
            <h6 className={style.title}>Contactanos</h6>
            <p>
              Solicita nuestros servicios, completando nuestro formulario, ¡es
              rápido y fácil!. ¡Haz el primer paso hacia el éxito hoy mismo!
            </p>
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Nombre</label> */}
            <input type="text" name="name" id="name" placeholder="Nombre" />
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Corro electronico</label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Corro electronico"
            />
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Telefono</label> */}
            <input type="text" name="name" id="name" placeholder="Telefono" />
          </div>
          <div className={style.contentInputs}>
            <select>
              <option value="">Seleccione un plan</option>
              <option value="">Plan 1</option>
              <option value="">Plan 2</option>
              <option value="">Plan 3</option>
            </select>
            {/* <label htmlFor="name">plan</label> */}
            {/* <input type="text" name="name" id="name" placeholder="Plan" /> */}
          </div>
          <div className={style.contentInputFile}>
            <label htmlFor="file">Archivo adjunto</label>
            <input type="file" name="file" id="file" />
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className={style.contentImgInfo}>
          <img src={logo} alt="" />
          <p>
            Potencia tu carrera profesional con nuestros servicios de
            asesoramiento y herramientas de búsqueda de empleo
          </p>
        </div>
      </div>
    </div>
  );
}
