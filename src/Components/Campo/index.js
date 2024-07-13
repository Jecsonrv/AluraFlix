import { useState } from "react"
import styles from "./Campo.module.css"

function Campo(props) {

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={styles.campo}>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default Campo