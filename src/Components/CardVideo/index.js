import React from "react";
import styles from "./CardVideo.module.css";
import iconoEditar from "./iconoEditar.png";
import iconoBorrar from "./iconoBorrar.png";
import { Link } from "react-router-dom";

function CardVideo({ id, link, imagen, eliminarVideo }) {
    const manejarEliminar = () => {
        eliminarVideo(id);
    };

    return (
        <div className={styles.cardVideo}>
            <Link to={link} target="_blank" rel="noopener noreferrer">
                <img className={styles.videoMiniatura} src={imagen} alt="Video miniatura" />
            </Link>
            <div className={styles.iconosCard}>
                <div className={styles.iconosPersonalizados} onClick={manejarEliminar}>
                    <img src={iconoBorrar} alt="icono borrar" />
                    <h4>Borrar</h4>
                </div>
            </div>
        </div>
    );
}

export default CardVideo;













