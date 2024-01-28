'use client'

import Image from "next/image";
import GoogleIcon from '@/app/Assets/logon/google.svg'
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export let ResultForm = null;

export const SignUp = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
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
        <div className={styles.form}>
            <h1>Cadastre-se</h1>

            <div className={styles.icon}>
                <Image
                    className={styles.googleIcon}
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

            <div className={styles.inputbox}>
                <input
                    className={errors?.name && styles.inputError}
                    type="text"
                    placeholder="Nome"
                    {...register("name", { required: true })}
                />
            </div>

            <div className={styles.inputbox}>
                <input
                    className={errors?.name && styles.inputError}
                    type="text"
                    placeholder="E-mail"
                    {...register("email", { required: true, validate: (value) => isEmail(value), })}
                />
            </div>
            <div className={styles.inputbox}>
                <input
                    className={errors?.name && styles.inputError}
                    type="password"
                    placeholder="Senha"
                    {...register("password", { required: true, minLength: 7 })}
                />
                {errors?.password?.type === "minLength" && (
                    <p className={styles.error}> A senha deve ter no minimo 4 caracteres </p>
                )}
            </div>
            <button onClick={() => handleSubmit(onSubmit)()} className={styles.btn}>
                Cadastrar
            </button>
        </div>
    )
}
