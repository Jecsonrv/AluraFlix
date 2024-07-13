import { useState } from "react";
import styles from "./CampoTextArea.module.css"

function CampoTextArea (props){

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return (
        <div className={styles.campoTextArea}>
            <label>{props.titulo}</label>
            <textarea 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            ></textarea>
        </div>
    )
}

export default CampoTextArea;