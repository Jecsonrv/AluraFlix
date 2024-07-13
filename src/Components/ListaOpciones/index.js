import { useEffect, useState } from "react";
import styles from "./ListaOpciones.module.css";

function ListaOpciones(props) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/jecsonrv/alura-flix-api/categorias")
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, []);

    const manejarCambio = (e) => {
        props.setCategoria(e.target.value);
    };

    

    return (
        <div className={styles.listaOpciones}>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled hidden>Seleccionar categoría</option>
                {categorias.map((categoria) => {
                    return (
                        <option key={categoria.id} value={categoria.nombre}>
                            {categoria.nombre}
                        </option>
                    );

                })}
            </select>
        </div>
    );
}

export default ListaOpciones;
