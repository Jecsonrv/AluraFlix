import TituloSeccion from "Components/TituloSeccion";
import styles from "./Banner.module.css"
import { Link } from "react-router-dom";
import bannerImage from "./banner.png"


function Banner() {
    return (
        <section className={styles.banner}>
            <img src={bannerImage} alt="Banner" className={styles.bannerImage}/>
            <div className={styles.overlay}>
                <div>
                    <TituloSeccion backgroundColor="#2271D1" textoTitulo="Front End" />
                    <h3>Challenge React</h3>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <div className={styles.videoContent}>
                    <a href="https://youtu.be/ov7vA5HFe6w?si=weUAn45434Ozdmly" target="_blank" rel="noopener noreferrer">
                        <img className={styles.videoInicio} src="https://ik.imagekit.io/noj6wnuqy/AluraFLix/tr:f-webp/video.2d556f83d1075ca96dc0.png?updatedAt=1683685012733" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner;