import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import logo from "./logo.png"

function Footer (){
    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img src={logo} alt="Logo Alura Flix" />
            </Link>
        </footer>
    )
}

export default Footer;