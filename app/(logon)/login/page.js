import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import Background from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import SingIn from '@/app/components/form.component/singIn/singIn'

export default function Login() {

    return (
        <Background heightContainer='100vh' circleColor='#6C33D7'>
            <div className={styles.ArrowBackButton}>
                <ArrowBackButton />
            </div>
            <div className={styles.textTop}>
                <h1>Que bom te ver<br />aqui novamente!</h1>
                <h2>Vamos embarcar nessa jornada <br />épica de aprendizado!</h2>
            </div>

            <div className={styles.wrapper}>

                <div className={styles.form}>
                    <h1>Login</h1>
                    <div className={styles.icon}>
                        <Image
                            className=''
                            src={GoogleIcon}
                            alt=''
                            width={45}
                            height={45}
                        />
                    </div>

                    <div className={styles.otherOptions}>
                        <div className={styles.line}>
                            <hr className={styles.hrEstilizada} />
                        </div>
                        <p className={styles.ou}>OU</p>
                        <div className={styles.line}>
                            <hr className={styles.hrEstilizada} />
                        </div>
                    </div>

                    <SingIn />
                </div>
            </div>

            <div className={styles.textright}>
                <h1>Que bom te ver<br />aqui novamente</h1>

                <h2>Vamos embarcar nessa jornada<br />épica de aprendizado!</h2>

                <h3>Não tem uma conta?</h3>

                <button type="button" className={styles.botao}>
                    <Link href={'/cadastro'}>
                        Cadastre-se
                    </Link>
                </button>
            </div>
        </Background>
    )
}