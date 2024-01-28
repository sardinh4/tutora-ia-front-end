'use client'

import Link from "next/link";
import styles from './page.module.css'
import { jwtDecode } from 'jwt-decode'
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { useRouter } from 'next/navigation'


export default function SingIn() {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            const serverResponse = await response.json();
            if (response.ok) {
                const token = serverResponse.token;
                if (token) {
                    const credentials = jwtDecode(token);
                    await setSession(credentials);
                    alert("Login feito");
                    router.push('/modulos/trilha-demo')
                } else {
                    alert("Algo de errado não está certo! (erro de email/senha)")
                }
            } else {
                alert("Erro ao fazer o login.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.inputbox}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        required
                        {...register("email", { required: true, validate: (value) => isEmail(value), })}
                    />
                </div>
                <div className={styles.inputbox}>
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        {...register("password", { required: true })}
                    />
                </div>
            </div>

            <div className={styles.rememberforgot}>
                <label><input type="checkbox" />Lembre-se de mim</label>
                <Link href={'/senha_reset'}>
                    Esqueci a senha
                </Link>
            </div>
            <button onClick={() => handleSubmit(onSubmit)()} className={styles.btn}>Entrar</button>
        </>
    )
}
