import React from "react";
import styles from "./Categoria.module.css";
import TituloSeccion from "Components/TituloSeccion";
import CardVideo from "Components/CardVideo";

function Categoria({ nombre, color, videos, eliminarVideo }) {
    return (
        <section className={styles.categoria}>
            <div>
                <TituloSeccion textoTitulo={nombre} backgroundColor={color} />
            </div>
            <div className={styles.videos}>
                {videos.map((video) => (
                    <CardVideo
                        key={video.id}
                        id={video.id}
                        link={video.link_video}
                        imagen={video.link_imagen}
                        eliminarVideo={eliminarVideo}
                    />
                ))}
            </div>
        </section>
    );
}

export default Categoria;

    


