import styles from "./BotonAzul.module.css"

const BotonAzul = (props) => {
    return <button type={props.type} className={styles.botonAzul}>{props.children}</button>
}

export default BotonAzul

