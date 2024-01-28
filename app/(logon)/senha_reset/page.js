import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'


export default function SenhaReset() {
    return (
        <div className={styles.backgroundLogin}>
            <div className={styles.ArrowBackButton}>
                <ArrowBackButton/>
            </div>
            <div className={styles.textTop}>
                <h2>Olá, pupil♡!</h2>
                <h3>Fique tranquilo, pois vamos te<br />ajudar, Informe os dados<br /> necessários para redefinir a
                    sua<br />senha. </h3>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <form className={styles.form} action="">
                    <h1>Redefinir a Senha</h1>

                    <p>Defina uma senha segura para ter acesso<br />a nossa plataforma.</p>

                    <div className={styles.box}>
                        <div className={styles.inputbox}>
                            <input type="password" placeholder="Nova Senha" required />
                        </div>

                        <div className={styles.inputbox}>
                            <input type="password" placeholder="Repita a Nova Senha" required />
                        </div>
                    </div>

                    <button type="submit" className={styles.btn}>Redefinir Senha</button>
                </form>
            </div>
            <div className={styles.textright}>
                <h2>Olá, pupil♡!</h2>

                <h3>Fique tranquilo, pois vamos te<br />ajudar, Informe os dados<br /> necessários para redefinir a
                    sua<br />senha.
                </h3>
            </div>
        </div>
    )
}