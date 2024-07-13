import styles from "./TituloSeccion.module.css"

function TituloSeccion ({backgroundColor, textoTitulo}){
    return(
            <h2 className={styles.titulo} style={{backgroundColor: `${backgroundColor}`}}>{textoTitulo}</h2>
    )
}

export default TituloSeccion