import Link from 'next/link'
import styles from './page.module.css'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import BackgroundLogin from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import { SignUp } from '@/app/components/form.component/singUp/SingUp'

export default function Cadastro() {

    const onSubmit = async (data) => {
        
        try {
            console.log(JSON.stringify(data, null, 2));
            const response = await fetch("http://localhost:8080/v1/auth/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                router.push('/login')
            } else {
                alert("Erro ao cadastrar. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <BackgroundLogin heightContainer='100vh' circleColor='#6C33D7'>
            <>
                <div className={styles.ArrowBackButton}>
                    <ArrowBackButton />
                </div>
                <div className={styles.main}>
                    <div className={styles.textTop}>
                        <h1>Seja bem-vindo!</h1>
                        <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>
                    </div>

                    <div className={styles.container}>
                        <SignUp />
                    </div>

                    <div className={styles.textright}>
                        <h1>Seja bem-vindo!</h1>

                        <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>

                        <h3>Já tem uma conta?</h3>

                        <button type="button" className={styles.button}>
                            <Link href={'/login'}>
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </>
        </BackgroundLogin>
    )
}