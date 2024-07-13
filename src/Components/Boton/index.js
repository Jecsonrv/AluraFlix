import styles from "./Boton.module.css"

const Boton = (props) => {
    return <button type={props.type} className={styles.boton}>{props.children}</button>
}

export default Boton

