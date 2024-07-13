import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import logo from "./logo.png"
import iconoAgregarVideo from "./agregarVideo.png"
import iconoHome from "./home.png"
import Boton from "Components/Boton";
import BotonAzul from "Components/BotonAzul";

function Header (props){
    return(
        <>
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo Alura Flix" />
            </Link>
            <div className={styles.botones}>
            <Link to="/">
                <BotonAzul>Home</BotonAzul>
            </Link>
            <Link to="nuevo-video">
                <Boton>Nuevo video</Boton>
            </Link>
            </div>
        </header>
        <header className={styles.headerMovil}>
            <Link to="/">
                <img src={iconoHome} alt="Boton Home" />
            </Link>
            <Link to="nuevo-video">
                <img src={iconoAgregarVideo} alt="Boton Agregar Video" />
            </Link>
        </header>
        </>
    )
}

export default Header;