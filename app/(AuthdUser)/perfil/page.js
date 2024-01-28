import PurpleBackground from "@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx";
import styles from "./page.module.css"
import Link from "next/link";
import ArrowBackButton from "@/app/components/arrowBackButton.component/arrowBackButton.jsx";

export default function Perfil() {
    return (
        <PurpleBackground className={styles.container} >
            
            <div className={styles.contentContainer}>

            <div className={styles.contentEsquerda}>
                <div className={styles.arrow}>
                <ArrowBackButton  />
                </div>
                    <img
                        src="/Aurora.svg"
                        alt="Nossa mascote Aurora"
                        className={styles.aurora}
                    ></img>
                </div>
            <div className={styles.contentDireita}>
                    <div className={styles.containerCima}>
                        <div className={styles.infoEsquerda}>
                            <h3>Hernando Silva</h3>
                        </div>
                        <div className={styles.infoDireita}>
                            <div className={styles.userImage}>
                                <img className={styles.userImage}
                                    src="/Perfil/Profile.svg"
                                    alt="Foto de perfil"
                                ></img>
                            </div>
                            <Link href={'/'}>
                                <button className={styles.configButton}>
                                    <img className={styles.configButton}
                                        src="/Perfil/Configuracao.svg"
                                        alt="Foto de perfil"
                                    ></img>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.missoesUsuarioCont}>
                        <div className={styles.missoesUsuario}>
                        <div className={styles.missaoDia}>
                            <h3>Missão do Dia</h3>
                            <p>Desbloqueie uma nova fase!</p>
                        </div>
                        <div className={styles.conquistas}>
                            <h3>Conquistas</h3>
                            <p>Elabore sua Primeira redação</p>
                            <button>VER MAIS</button>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </PurpleBackground>
    )
}
