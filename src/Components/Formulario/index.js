import React, { useState } from "react";
import BotonAzul from "Components/BotonAzul";
import styles from "./Formulario.module.css";
import Campo from "Components/Campo";
import Boton from "Components/Boton";
import ListaOpciones from "Components/ListaOpciones";
import CampoTextArea from "Components/CampoTextArea";

function Formulario({ registrarVideo }) {
    const [titulo, setTitulo] = useState("");
    const [link_imagen, setLink_imagen] = useState("");
    const [link_video, setLink_video] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            titulo,
            link_video,
            link_imagen,
            descripcion,
            categoria
        };
        registrarVideo(datosAEnviar);
        setTitulo("");
        setLink_imagen("");
        setLink_video("");
        setDescripcion("");
        setCategoria("");
    };

    return (
        <section className={styles.paginaFormulario}>
            <h1>Nuevo video</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <form onSubmit={manejarEnvio} className={styles.formulario}>
                <h2>Crear Tarjeta</h2>
                <div className={styles.formularioInput}>
                    <Campo
                        titulo="Titulo"
                        placeholder="Titulo del vídeo"
                        required
                        value={titulo}
                        setValor={setTitulo}
                    />
                    <ListaOpciones valor={categoria} setCategoria={setCategoria} />
                    <Campo
                        titulo="Imagen"
                        placeholder="Link de la imagen"
                        required
                        value={link_imagen}
                        setValor={setLink_imagen}
                    />
                    <Campo
                        titulo="Vídeo"
                        placeholder="Link del vídeo"
                        required
                        value={link_video}
                        setValor={setLink_video}
                    />
                    <div className={styles.formularioTextArea}>
                        <CampoTextArea
                            titulo="Descripción"
                            placeholder="¿De qué se trata el video?"
                            required
                            value={descripcion}
                            setValor={setDescripcion}
                        />
                    </div>
                    <div className={styles.formularioBotones}>
                        <BotonAzul type="submit">Guardar</BotonAzul>
                        <Boton type="reset">Limpiar</Boton>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Formulario;





